/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  CompoundEntityRef,
  Entity,
  ENTITY_DEFAULT_NAMESPACE,
  GroupEntity,
  RELATION_PARENT_OF,
  serializeEntityRef,
  UserEntity,
} from '@backstage/catalog-model';
import {
  CatalogApi,
  getEntityRelations,
} from '@backstage/plugin-catalog-react';

export const getMembersFromGroups = async (
  groups: CompoundEntityRef[],
  catalogApi: CatalogApi,
  relationship = 'memberof',
) => {
  const membersList =
    groups.length === 0
      ? { items: [] }
      : await catalogApi.getEntities({
          filter: {
            kind: 'User',
            [`relations.${relationship.toLocaleLowerCase('en-US')}`]:
              groups.map(group =>
                serializeEntityRef({
                  kind: 'group',
                  namespace: group.namespace.toLocaleLowerCase('en-US'),
                  name: group.name.toLocaleLowerCase('en-US'),
                }),
              ),
          },
        });

  return membersList.items as UserEntity[];
};

export const getDescendantGroupsFromGroup = async (
  group: GroupEntity,
  catalogApi: CatalogApi,
) => {
  const alreadyQueuedOrExpandedGroupNames = new Map<string, boolean>();
  const groupRef: CompoundEntityRef = {
    kind: group.kind,
    namespace: group.metadata.namespace ?? ENTITY_DEFAULT_NAMESPACE,
    name: group.metadata.name,
  };

  const groupQueue = [groupRef];
  const resultantGroupRefs: CompoundEntityRef[] = [];

  // Continue expanding groups until there are no more
  while (groupQueue.length > 0) {
    const activeGroupRef = groupQueue.shift() as CompoundEntityRef;
    const activeGroup = await catalogApi.getEntityByRef(activeGroupRef);
    alreadyQueuedOrExpandedGroupNames.set(
      serializeEntityRef(activeGroupRef),
      true,
    );

    const childGroups = getEntityRelations(activeGroup, RELATION_PARENT_OF, {
      kind: 'Group',
    }).filter(
      currentGroup =>
        !alreadyQueuedOrExpandedGroupNames.has(
          serializeEntityRef(currentGroup),
        ),
    );
    childGroups.forEach(childGroup =>
      alreadyQueuedOrExpandedGroupNames.set(
        serializeEntityRef(childGroup),
        true,
      ),
    );

    groupQueue.push(...childGroups);
    resultantGroupRefs.push(...childGroups);
  }

  return resultantGroupRefs;
};

export const getAllDesendantMembersForGroupEntity = async (
  groupEntity: GroupEntity,
  catalogApi: CatalogApi,
  relationship = 'memberof',
) =>
  getMembersFromGroups(
    await getDescendantGroupsFromGroup(groupEntity, catalogApi),
    catalogApi,
    relationship,
  );

export const removeDuplicateEntitiesFrom = (entityArray: Entity[]) => {
  const seenEntities = new Map<string, boolean>();

  return entityArray.filter(entity => {
    const stringifiedEntity = serializeEntityRef(entity);
    const isDuplicate = seenEntities.has(stringifiedEntity);

    seenEntities.set(stringifiedEntity, true);
    return !isDuplicate;
  });
};

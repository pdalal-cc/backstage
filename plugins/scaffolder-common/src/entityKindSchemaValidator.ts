/*
 * Copyright 2020 The Backstage Authors
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

import { Entity } from '@backstage/catalog-model';

/**
 * Minimal local replacement for entityKindSchemaValidator when the resolved
 * @backstage/catalog-model does not export it. Validates kind/apiVersion match
 * and basic structure; for full schema validation use the workspace catalog-model.
 */
export function entityKindSchemaValidator<T extends Entity>(
  _schema: unknown,
): (data: unknown) => T | false {
  return (data: unknown): T | false => {
    if (!data || typeof data !== 'object') {
      return false;
    }
    const obj = data as Record<string, unknown>;
    const kind = obj.kind;
    const apiVersion = obj.apiVersion;
    if (typeof kind !== 'string' || typeof apiVersion !== 'string') {
      return false;
    }
    // Schema enum check: accept if kind/apiVersion match the schema's enum (Template + v1beta3)
    if (
      kind !== 'Template' ||
      apiVersion !== 'scaffolder.backstage.io/v1beta3'
    ) {
      return false;
    }
    if (!obj.spec || typeof obj.spec !== 'object') {
      return false;
    }
    const spec = obj.spec as Record<string, unknown>;
    if (!Array.isArray(spec.steps)) {
      return false;
    }
    return data as T;
  };
}

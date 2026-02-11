# Security Vulnerabilities Report

Generated: February 11, 2026

This report identifies security vulnerabilities found in the project's dependencies using `yarn npm audit --recursive`.

## Summary

- **High Severity**: 8 vulnerabilities
- **Moderate Severity**: 30+ vulnerabilities
- **Low Severity**: 4 vulnerabilities
- **Deprecations**: Multiple deprecated packages

---

## 🔴 HIGH SEVERITY VULNERABILITIES

### 1. **@isaacs/brace-expansion** (ID: 1112954)

- **Version**: 5.0.0
- **Issue**: Uncontrolled Resource Consumption
- **Dependents**: minimatch@npm:10.1.1
- **URL**: https://github.com/advisories/GHSA-7h2j-956f-4vf2

### 2. **@remix-run/router** (ID: 1112052)

- **Version**: 1.23.1
- **Issue**: React Router vulnerable to XSS via Open Redirects
- **Dependents**: react-router@npm:6.30.2
- **URL**: https://github.com/advisories/GHSA-2w69-qvjg-hvjx

### 3. **axios** (ID: 1113092)

- **Versions**: 1.13.2, 1.13.4
- **Issue**: Vulnerable to Denial of Service via **proto** Key in mergeConfig
- **Dependents**:
  - @module-federation/dts-plugin@npm:0.9.1
  - @openapitools/openapi-generator-cli@npm:2.28.0
- **URL**: https://github.com/advisories/GHSA-43fc-jf86-j433

### 4. **cross-spawn** (ID: 1104663)

- **Version**: 6.0.5
- **Issue**: Regular Expression Denial of Service (ReDoS)
- **Dependents**: execa@npm:1.0.0
- **URL**: https://github.com/advisories/GHSA-3xgq-45jj-v275

### 5. **fast-xml-parser** (ID: 1112708)

- **Versions**: 4.4.1, 5.2.5
- **Issue**: RangeError DoS Numeric Entities Bug
- **Dependents**:
  - @aws-sdk/xml-builder@npm:3.930.0
  - @google-cloud/storage@npm:7.18.0
- **URL**: https://github.com/advisories/GHSA-37qj-frw5-hhjh

### 6. **lodash.pick** (ID: 1106907)

- **Version**: 4.4.0
- **Issue**: Prototype Pollution in lodash
- **Dependents**: @useoptic/rulesets-base@npm:1.0.9
- **URL**: https://github.com/advisories/GHSA-p6mc-m468-83gw

### 7. **tar** (Multiple vulnerabilities)

- **Version**: 6.2.1
- **Dependents**: @useoptic/optic@npm:1.0.9
- **Issues**:
  - **ID: 1112255**: Arbitrary File Overwrite and Symlink Poisoning via Insufficient Path Sanitization
    - URL: https://github.com/advisories/GHSA-8qq5-rm4j-mr97
  - **ID: 1112329**: Race Condition in node-tar Path Reservations via Unicode Ligature Collisions on macOS APFS
    - URL: https://github.com/advisories/GHSA-r6q2-hw4h-h46w
  - **ID: 1112659**: Vulnerable to Arbitrary File Creation/Overwrite via Hardlink Path Traversal
    - URL: https://github.com/advisories/GHSA-34x7-hfp2-rc4v

---

## 🟡 MODERATE SEVERITY VULNERABILITIES

### 1. **@octokit/plugin-paginate-rest** (ID: 1102898)

- **Version**: 6.1.2
- **Issue**: Regular Expression in iterator Leads to ReDoS Vulnerability Due to Catastrophic Backtracking
- **Dependents**: @octokit/rest@npm:19.0.13
- **URL**: https://github.com/advisories/GHSA-h5c3-5r3r-rr8q

### 2. **@octokit/request** (ID: 1112248)

- **Versions**: 5.6.3, 6.2.8
- **Issue**: Regular Expression in fetchWrapper that Leads to ReDoS Vulnerability Due to Catastrophic Backtracking
- **Dependents**:
  - @octokit/auth-oauth-app@npm:5.0.1
  - @octokit/core@npm:4.2.4
- **URL**: https://github.com/advisories/GHSA-rmvr-2pp2-xv38

### 3. **@octokit/request-error** (ID: 1102256)

- **Versions**: 2.1.0, 3.0.3
- **Issue**: Regular Expression in index that Leads to ReDoS Vulnerability Due to Catastrophic Backtracking
- **Dependents**:
  - @octokit/core@npm:4.2.4
  - @octokit/request@npm:5.6.3
- **URL**: https://github.com/advisories/GHSA-xx4v-prfh-6cgc

### 4. **got** (ID: 1088948)

- **Version**: 9.6.0
- **Issue**: Got allows a redirect to a UNIX socket
- **Dependents**: package-json@npm:6.5.0
- **URL**: https://github.com/advisories/GHSA-pfrx-2q88-qq97

### 5. **jsonpath** (ID: 1112974)

- **Version**: 1.1.1
- **Issue**: Vulnerable to Prototype Pollution due to insufficient input validation of object keys
- **Dependents**: bfj@npm:8.0.0
- **URL**: https://github.com/advisories/GHSA-6c59-mwgh-r2x6

### 6. **koa** (Multiple vulnerabilities)

- **Version**: 2.15.4
- **Dependents**: @module-federation/dts-plugin@npm:0.9.1
- **Issues**:
  - **ID: 1108441**: Vulnerable to Cross-Site Scripting (XSS) at ctx.redirect() function
    - URL: https://github.com/advisories/GHSA-x2rg-q646-7m2v
  - **ID: 1106835**: Open Redirect via Referrer Header (User-Controlled)
    - URL: https://github.com/advisories/GHSA-jgmv-j7ww-jx2x

### 7. **lodash** (ID: 1112455)

- **Version**: 4.17.21
- **Issue**: Prototype Pollution Vulnerability in `_.unset` and `_.omit` functions
- **Dependents**: postman-collection@npm:4.2.1
- **URL**: https://github.com/advisories/GHSA-xxjr-mmjv-4gpg

### 8. **prismjs** (ID: 1105770)

- **Version**: 1.27.0
- **Issue**: DOM Clobbering vulnerability
- **Dependents**: refractor@npm:3.6.0
- **URL**: https://github.com/advisories/GHSA-x7hr-w5r2-h6wg

### 9. **undici** (ID: 1112496)

- **Version**: 5.29.0
- **Issue**: Unbounded decompression chain in HTTP responses on Node.js Fetch API via Content-Encoding leads to resource exhaustion
- **Dependents**: urllib@npm:3.27.3
- **URL**: https://github.com/advisories/GHSA-g9mf-h72j-4rw9

---

## 🟢 LOW SEVERITY VULNERABILITIES

### 1. **@smithy/config-resolver** (ID: 1111987)

- **Version**: 3.0.6
- **Issue**: AWS SDK for JavaScript v3 adopted defense in depth enhancement for region parameter value
- **Dependents**: @aws-sdk/client-codecommit@npm:3.651.1
- **URL**: https://github.com/advisories/GHSA-6475-r3vj-m8vf

### 2. **brace-expansion** (ID: 1105444)

- **Version**: 2.0.1
- **Issue**: Regular Expression Denial of Service vulnerability
- **Dependents**: minimatch@npm:9.0.5
- **URL**: https://github.com/advisories/GHSA-v6h2-p8h4-qcjw

### 3. **cookie** (ID: 1103907)

- **Version**: 0.4.2
- **Issue**: Accepts cookie name, path, and domain with out of bounds characters
- **Dependents**: msw@npm:1.3.5
- **URL**: https://github.com/advisories/GHSA-pxg6-pf52-xh8x

### 4. **diff** (Multiple vulnerabilities)

- **Versions**: 5.2.0, 8.0.2
- **Issue**: Denial of Service vulnerability in parsePatch and applyPatch
- **Dependents**:
  - sinon@npm:18.0.1
  - @microsoft/api-extractor@npm:7.55.2
- **URL**: https://github.com/advisories/GHSA-73rr-hh4g-fpgx

### 5. **elliptic** (ID: 1112030)

- **Version**: 6.6.1
- **Issue**: Uses a Cryptographic Primitive with a Risky Implementation
- **Dependents**: browserify-sign@npm:4.2.3
- **URL**: https://github.com/advisories/GHSA-848j-6mx2-7j84

---

## ⚠️ DEPRECATED PACKAGES

The following packages are deprecated and should be updated or replaced:

1. **@faker-js/faker** (5.5.3) - Please update to a newer version
2. **@humanwhocodes/config-array** (0.13.0) - Use @eslint/config-array instead
3. **@humanwhocodes/object-schema** (2.0.3) - Use @eslint/object-schema instead
4. **@material-ui/core** (4.12.4) - Material UI v4 doesn't receive active development since September 2021
5. **@material-ui/lab** (4.0.0-alpha.61) - Material UI v4 doesn't receive active development
6. **@material-ui/styles** (4.11.5) - Material UI v4 doesn't receive active development
7. **@react-hookz/deep-equal** (1.0.4) - PACKAGE IS DEPRECATED, USE @ver0/deep-equal INSTEAD
8. **boolean** (3.2.0) - Package no longer supported
9. **core-js** (2.6.12) - core-js@<3.23.3 is no longer maintained
10. **eslint** (8.57.1) - This version is no longer supported
11. **glob** (7.2.3) - Old versions contain widely publicized security vulnerabilities
12. **inflight** (1.0.6) - Module is not supported and leaks memory
13. **lodash.get** (4.4.2) - Use the optional chaining (?.) operator instead
14. **lodash.isequal** (4.5.0) - Use require('node:util').isDeepStrictEqual instead
15. **lodash.omit** (4.5.0) - Use destructuring assignment syntax instead
16. **node-domexception** (1.0.0) - Use your platform's native DOMException instead
17. **react-beautiful-dnd** (13.0.0) - Package is now deprecated
18. **rimraf** (3.0.2) - Rimraf versions prior to v4 are no longer supported
19. **stable** (0.1.8) - Modern JS already guarantees Array#sort() is a stable sort
20. **uuid** (3.4.0) - Please upgrade to version 7 or higher

---

## Recommendations

1. **Immediate Action Required**: Address all HIGH severity vulnerabilities first, especially:

   - Update `tar` package (multiple critical vulnerabilities)
   - Update `axios` to latest version
   - Update `@remix-run/router` or `react-router`
   - Update `fast-xml-parser`

2. **Update Deprecated Packages**: Replace deprecated packages with their recommended alternatives:

   - Upgrade ESLint to version 9.x
   - Migrate from Material UI v4 to v5
   - Replace deprecated lodash utilities with native JavaScript

3. **Regular Audits**: Run `yarn npm audit --recursive` regularly to catch new vulnerabilities early.

4. **Consider Using**:
   - `yarn upgrade-interactive` to update packages selectively
   - `yarn upgrade` to update packages within semver ranges
   - Consider using `yarn resolutions` to force specific versions of vulnerable transitive dependencies

---

## How to Run This Audit Again

```bash
yarn npm audit --recursive
```

For JSON output:

```bash
yarn npm audit --recursive --json > audit-results.json
```

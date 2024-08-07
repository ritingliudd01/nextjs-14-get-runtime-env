# Load different `.env.*` without re-build

## Target
- Build once but able to load different `.env` file;
- The loaded `.env` values are available in the whole project;
- The `.env` values are accessible in both server and client side rendering.

## Files & Folders
- Root files
    - `.env.development` for local development `yarn dev`
    - `.env.test` for staging `yarn start`
    - `.env.production` for production `yarn start:prod`

- `src/util/getEnv.ts` gets env values from server side
    - The values cover Nodejs env and those from specific `.env.*` file

- `src/provider/env.tsx` passing env context for client side rendering

## Usage

### Server Side
Use util function `getEnv()` directly
```jsx
// see src/app/page.tsx
import getEnv from '@/util/getEnv';

const env = getEnv();
```

### Client Side
Use context passed from `src/app/layout.tsx`
```jsx
// see src/app/client/page.tsx
import { useContext } from 'react';
import { EnvContext } from "../../provider/env";

const env = useContext(EnvContext);
```

## Reference

[Runtime Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#runtime-environment-variables)


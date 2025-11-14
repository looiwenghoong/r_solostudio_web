# Solo Studio Web

This repository now uses [Next.js](https://nextjs.org/) with the App Router to render Solo Studio marketing pages and policies.

## Getting Started

```bash
npm install
npm run dev
```

Navigate to http://localhost:3000 to view the site. Update `policyInfo` inside `app/rifin/privacy_policy/page.tsx` with the correct product details.

## Available Scripts

- `npm run dev` – Start the Next.js development server.
- `npm run build` – Create an optimized production build.
- `npm run start` – Run the production server after building.
- `npm run lint` – Check the project with ESLint / `eslint-config-next`.

## Project Layout

```
app/
  layout.tsx               Root document shell + metadata
  page.tsx                 Landing page with CTA to the privacy policy
  rifin/privacy_policy/    Dedicated policy route and JSX content
lib/router.ts              Centralized Router helper for internal paths
public/             Static assets (create as needed)
```

Node.js 18.17+ is required.

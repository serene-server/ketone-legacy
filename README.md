# Ketone

This project is build using Turborepo with multiple meta-frameworks all working in harmony and sharing packages.

This project also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## Getting Started

To get started, clone the repository and install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the admin panel.

Open [http://localhost:3002](http://localhost:3002) with your browser to see the web app.

Open [http://localhost:3003](http://localhost:3003) with your browser to see the docs.

Check [http://localhost:3000](http://localhost:3000) to see the API.

## Learn More

To learn more about **Turborepo**, please check out the [Documentation](https://turbo.build/repo/docs)

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `admin`: a [Vite](https://vitejs.dev/) app
- `api`: an [Express](https://expressjs.com/) server
- `web`: a [Next.js](https://nextjs.org/) app
- `admin-tests`: E2E tests for the `admin` app
- `web-tests`: E2E tests for the `web` app
- `@repo/database`: [Prisma](https://prisma.io/) ORM wrapper to manage & access database
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console library)
- `@repo/tailwind-config`: Tailwind CSS configurations used throughout the monorepo
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo
- `@repo/ui`: a shared stub React component library with [Tailwind CSS](https://tailwindcss.com/) styling

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Playwright](https://playwright.dev/) for end-to-end testing
- [Supertest]() for API testing
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky) for Git hooks
- [lint-staged](https://opencollective.com/lint-staged) for running linters on staged files
- [Commitzen](https://commitizen.github.io/cz-cli/) for commit message conventions
- [Conventional Commits](https://www.conventionalcommits.org/) for commit message conventions
- [Prisma](https://prisma.io/) for database ORM
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.com/) for UI components

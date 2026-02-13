# About the Project

This repository contains the scaffolding for DA's new website, powered by Nextjs, TypeScript & Strapi.

## Table of Contents

- [About Distribute Aid](#about-distribute-aid)
- [About Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Getting started](#-getting-started-with-gitpod)
  - [Setup](#setup)
  - [Installation](#installation)
  - [Choosing an Issue](#choosing-an-issue)
  - [Branching & Workflow](#branching--workflows)
  - [Coding Conventions / Best Practices](#coding-conventions--best-practices)
  - [Project Structure](#project-structure)
  - [Running Checks](#running-checks)
  - [Crafting Commit Messages](#crafting-commit-messages)
  - [Crafting a Pull Request (PR)](#crafting-a-pull-request-pr)
  - [Creating Issues](#creating-issues)
    - [Sub Issues](#sub-issues)
- [Reviewing Pull Requests](#reviewing-pull-requests)
- [Merging Branches](#merging-branches)

## Technologies Used

- [Nextjs](https://nextjs.org/docs) - Frontendframework
- [Typescript](https://www.typescriptlang.org/) - scripting language
- [Radix UI](https://www.radix-ui.com/) - component libary
- [Tailwind.css](https://tailwindcss.com/) CSS framework
- [npm](https://docs.npmjs.com/getting-started) - package manager
- [Prettier](https://prettier.io/) - code formatter (via the pretty-quick node module)
- [ESLint](https://eslint.org/) - Linting
- [Vercel](https://vercel.com/home) - Production and deployment
<!-- - [Playwright](https://playwright.dev/) - end-to-end (E2E) test framework -->

## Setup

[TODO: clone and so on]

 This setup comes preconfigured with Nextjs, TypeScript, Tailwind, and Next's Incremental Static Regeneration

To run a Nextjs project you'll need to install or update these dependencies:

- [Node.js version >=20.0.0 <=22.22.0](https://nodejs.org/en/download)
- [Yarn >= 4.4.0](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Installation

Here are the steps to set up the project in your local dev environment:

1. Install Dependencies:

```Bash
- yarn install
```

2. Then run the development server to launch your app:

```bash
yarn dev
```

3. Open <http://localhost:3000> with your browser to see the result.
The page auto-updates as you edit the file.

## Coding Conventions / Best Practices

- Avoid using raw #hexadecimal values. View `/src/stylesheets/` or `tailwind.config.ts` to see color value names.
- Use Radix UI's component library and use tailwind CSS for supplementary styling.

## Project Structure

We are using a [Next project structure](https://nextjs.org/docs/app/getting-started/project-structure).

### `/public/`

Contains images and documents that are used in different pages or components.

### `/src/`

Most of the files you may be working with live inside the `/src/` folder.

#### `/src/app/`

Contains the main pages for routing, meaning `/src/app/[foldername]/page.tsx` would route to the `/[foldername]` page on the website.

##### `src/app/api`

Any server-side code should be sequestered in `src/app/api`; i.e. logic for the contact form. 

#### `/src/components/`

Each page is made up of multiple components that will be imported onto that specific page.

#### `/src/data`

Anything data-related should live in `/src/data`, rather than inline in components.

## Running checks

To check types:

```bash
yarn check:types
```

To run the linter:

```bash
yarn lint
```

Check formatting:

```bash
yarn check:format
yarn format
```

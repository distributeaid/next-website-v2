# README

This repository contains the scaffolding for DA's new website, powered by Next.js, TypeScript & Strapi. For most information about contributing to DA (e.g. our dev process and asking for help), please refer first to the [general contributing guide](https://github.com/distributeaid/docs/blob/193d6eaaedb5b9e453f97ae15619d07e6b1e7ba1/how-to-DA/contributing.md). This guide contains other information specific to contributing to this repo.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Installation](#installation)
- [Coding Conventions / Best Practices](#coding-conventions--best-practices)
- [Project Structure](#project-structure)
- [Running Checks](#running-checks)

## Technologies Used

- [Next.js](https://nextjs.org/docs) - Frontend framework
- [Typescript](https://www.typescriptlang.org/) - scripting language
- [Radix UI](https://www.radix-ui.com/) - component library
- [Tailwind.css](https://tailwindcss.com/) CSS framework
- [npm](https://docs.npmjs.com/getting-started) - package manager
- [Prettier](https://prettier.io/) - code formatter (via the pretty-quick node module)
- [ESLint](https://eslint.org/) - Linting
- [Vercel](https://vercel.com/home) - Production and deployment

## Setup

### Clone this repo

```bash
git clone https://github.com/distributeaid/next-website-v2.git
```

### Install dependencies

This setup comes preconfigured with Next.js, TypeScript, Tailwind, and Next's Incremental Static Regeneration.

To run a Next.js project you'll need to install or update these dependencies:

- [Node.js version >=20.0.0 <=22.22.0](https://nodejs.org/en/download)
- [Yarn >= 4.4.0](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Installation

Here are the steps to set up the project in your local dev environment:

1. Install Dependencies:

```bash
- yarn install
```

2. Then run the development server to launch your app:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   The page auto-updates as you edit the file.

## Coding Conventions / Best Practices

- Avoid using raw #hexadecimal values. View `/src/stylesheets/` or `tailwind.config.ts` to see color value names.
- Use Radix UI's component library and use tailwind CSS for supplementary styling.

## Project Structure

We are using a [Next project structure](https://nextjs.org/docs/app/getting-started/project-structure).

- `/public/`
  - Contains images and documents that are used in different pages or components.
- `/src/`
  - Most of the files you'll be working with live inside the `/src/` folder.
- `/src/app/`
  - Contains the main pages for routing, meaning `/src/app/[foldername]/page.tsx` would route to the `/[foldername]` page on the website.
- `src/app/api`
  - Any server-side code should be sequestered in `src/app/api`; i.e. logic for the contact form.
- `/src/components/`
  - Each page is made up of multiple components that will be imported onto that specific page.
- `/src/data`
  - Anything data-related should live in `/src/data`, rather than inline in components.

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

To run tests:

```bash
yarn test
```

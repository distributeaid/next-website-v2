# About Distribute Aid

Distribute Aid (DA) delivers humanitarian aid to communities in need.

By coordinating end-to-end shipments, we make it easy for donors to connect with frontline aid organisations, understand the needs on the ground, and get their aid delivered.

## About Open Source Explorers Program

Open Source Explorers is Distribute Aid’s open source outreach program. It uses contributions to Distribute Aid’s projects as a well-structured and impactful introduction to open source. The program is aimed at developers, designers, and other types of contributors. Read more about the program here: [ose](https://distributeaid.org/tech/oss-explorers/)

## About the Project

This repository contains the scaffolding for DA's new website, powered by Nextjs, Strapi, and Puck CMS.

## Technologies Used

- [Nextjs](https://nextjs.org/docs) - Frontendframework
- [Typescript](https://www.typescriptlang.org/) - scripting language
- [Tailwind.css](https://tailwindcss.com/) CSS framework
- [npm](https://docs.npmjs.com/getting-started) - package manager
- [Prettier](https://prettier.io/) - code formatter (via the pretty-quick node module)
- [ESLint](https://eslint.org/) - Linting
- [Vercel](https://vercel.com/home) - Production and deployment
<!-- - [Playwright](https://playwright.dev/) - end-to-end (E2E) test framework -->

## Setup

This setup comes preconfigured with Nextjs, TypeScript, Tailwind,  and Next's Incremental Static Regeneration

To run a Nextjs project you'll need to install or update these dependencies:

- [Node.js 18.17 or later](https://nodejs.org/en)
- [Node Version Manager](https://github.com/SpaceyaTech/mentorlst-dashboard/blob/main/README.md) - to update Node.js

## Installation

Here are the steps to set up the project in your local dev environment:

1. Install Dependencies:

```Bash
- npm install
```

2.Then run the development server to launch your app:

```Bash
npm run dev
```

3.Open <http://localhost:3000> with your browser to see the result.
You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

## Branching & Workflows

We'll have a long-running branch(saga) and short-lived branches that will be used to develop parts of the website. An example of a short-lived branch would be feat/about-us. Always ensure you're working on a seperate branch to avoid merge conflicts

## Crafting commit messages

When crafting commit messages, try to group commits that are related to a particular topic. For example, if you're making commits related to the styling, only include files that are related to styling. This makes it easier to read through the commits and see the exact files that made changes to the styles.

A good commit message will ideally have the following attributes:

- Subject => A summary of what you did in the commit.
- Body => A detailed explanation of the commit.
- Proper commits make debugging easier in cases where we need to go through our git logs.

## Crafting a Pull Request (PR)

- Include the purpose of the Pull Request and link the issue related to the PR

- Consider providing an overview of why the work is taking place (with any relevant links). Don't assume familiarity with the history

- Be explicit about what feedback you want, if any: a quick pair of ** on the code, discussion on the technical approach, critique on design, a review copy

- Be explicit about when you want feedback, if the Pull Request is a work in progress, say so. Prefix the title of your PR with [WIP]

- @mention individuals that you specifically want to involve in the discussion and explain the help or input you need from them.

Happy coding!

## License

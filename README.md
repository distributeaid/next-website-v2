# About Distribute Aid

Distribute Aid (DA) delivers humanitarian aid to communities in need.

By coordinating end-to-end shipments, we make it easy for donors to connect with frontline aid organisations, understand the needs on the ground, and get their aid delivered.

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

## About the Project

This repository contains the scaffolding for DA's new website, powered by Nextjs, TypeScript & Strapi.

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

# 🚀 Getting started with Gitpod

Gitpod provides a fully automated development environment for your Next.js project, and the development environment is set up with just a single click. Follow these steps to get started:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/distributeaid/next-website-v2)

1. Click the `Open in Gitpod` button above. Note: you'll need to have an account on [Gitpod](https://gitpod.io/login/) before proceeding with the next steps (this requires a GitHub account).
2. Click the `Continue` button.
3. Relax, a development environment is being set up for you in the first terminal.
4. To access your workspace later, go to [Gitpod Workspaces](https://gitpod.io/workspaces). Pin the `next-website-v2` workspace to prevent auto-deletion after 14 days by clicking the three dots next to the workspace name and selecting "Pin".

## Setup

This setup comes preconfigured with Nextjs, TypeScript, Tailwind, and Next's Incremental Static Regeneration

To run a Nextjs project you'll need to install or update these dependencies:

- [Node.js 18.17 or later](https://nodejs.org/en)
- [Node Version Manager](https://github.com/SpaceyaTech/mentorlst-dashboard/blob/main/README.md) - to update Node.js

## Installation

Here are the steps to set up the project in your local dev environment:

1. Install Dependencies:

```Bash
- yarn install
```

2.Then run the development server to launch your app:

```Bash
yarn run dev
```

3.Open <http://localhost:3000> with your browser to see the result.
You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

## Choosing an Issue

Choose an unassigned issue from the [Issue's page on Github](https://github.com/distributeaid/next-website-v2/issues) or see which issues are `Ready for Work` in the [DA Project Board](https://github.com/orgs/distributeaid/projects/15). Note: issues labeled `Good first issue` are ideal for newcomers. Once chosen, be sure to assign yourself to the issue and mark the issue as `In Progress`.

## Branching & Workflows

We have a long-running branch (**saga**) and create short-lived branches to develop parts of the website. Our branch naming convention is type/issue#/condensed-issue-name. An example of a short-lived branch would be feat/365/about-us. Connect words using a "-" as branch names cannot include empty spaces. Always ensure you're working on a separate branch to avoid merge conflicts.

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

#### `/src/components/`

Each page is made up of multiple components that will be imported onto that specific page.

## Running checks

To check types:

```Bash
yarn run check:types
```

To run the linter:

```Bash
yarn run lint
```

## Crafting commit messages

When crafting commit messages, group commits that are related to a particular topic. For example, if you're making commits related to the styling, only include files that are related to styling. This makes it easier to read through the commits and see the exact files that made changes to the styles. See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more information.

A good commit message will ideally have the following attributes:

- Subject => A summary of what you did in the commit.
- Body => A detailed explanation of the commit.
- Proper commits make debugging easier in cases where we need to go through our git logs.

## Crafting a Pull Request (PR)

- Include the purpose of the Pull Request and link the issue related to the PR (with the `#` sign)

- Consider providing an overview of why the work is taking place (with any relevant links). Don't assume familiarity with the history

- Be explicit about what feedback you want, if any: a quick pair of \*\* on the code, discussion on the technical approach, critique on design, a review copy

- Be explicit about when you want feedback, if the Pull Request is a work in progress, say so. Prefix the title of your PR with [WIP]

- @mention individuals that you specifically want to involve in the discussion and explain the help or input you need from them.

- assign the issue owner as a reviewer

Happy coding!!!

## Creating Issues

On the [Issues page on Github](https://github.com/distributeaid/next-website-v2/issues), click the green `New Issue` button or this [New Issue Link](https://github.com/distributeaid/next-website-v2/issues/new).

- Add a descriptive title with an optional `[type tag]` such as [component] or [page]. In the description body summarize the issue.
- Add external links, such as to figma designs or external documentation, if applicable. If a figma design exists, be sure to add screenshots. Visual explanations go a long way towards making things super clear.
- Add parts of the codebase where changes would be made.
- Assign the issue to yourself or someone else, or leave for another person to pick it up.
- Add appropriate labels and types.
- Add the issue to the project **DA Tech**.

If the issue needs some precursor set up before someone can work on the issue (particularly for parents of sub issues) such as library installations and page or folder creations, then you must first set the issue as `Triage` until those appropriate changes are made and reviewed in a pull request. Otherwise, set the issue as `Ready for Work`.

### Sub Issues

For larger issues that can be split up into separate independent parts. For example a new parent page with multiple children components. You can create a parent issue, with multiple child issues. [See these slides](https://docs.google.com/presentation/d/1ToMum70-qDlaCv6m7X3HfGr3XjaX-UjyA36K4IElO5Y/edit?slide=id.g2dd259a195e_0_9#slide=id.g2dd259a195e_0_9) on how to create sub issues.

# Reviewing Pull Requests

When reviewing changes, first give praise for the work done. Leave a general summary of the changes needed to be made. Individual comments can be put to show specific instances or examples directly in the codebase. See [Conventional Comments](https://conventionalcomments.org/) for more information.

A good comment will ideally have the following attributes:

- Label => Signifies what kind of comment is being left
- Subject => Main message of the comment
- Decorations (_optional_) => These are extra decorating labels for the comment. They are surrounded by parentheses and comma-separated.
- Discussion (_optional_) =>This contains supporting statements, context, reasoning, and anything else to help communicate the “why” and “next steps” for resolving the comment.

Labeling comments encourages collaboration and saves hours of undercommunication and misunderstandings.

# Merging Branches

Use [`git rebase`](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) to resolve any merge conflicts between branches. Once the incoming branch is merged into saga, it is safe to delete.

<!-- ## License -->
<!-- Check with Taylor -->

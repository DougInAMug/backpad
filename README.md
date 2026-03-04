# Backpad 🗒️
> Imagine you have a pad attached to your back that your colleagues can write on and read — but you can't!
> 
> Don't worry: they all have one too.

Backpad brings this imaginary to life by automatically creating a pad for each user to which they have _no_ read or write access, but which every other user _does_. While people can and do create private channels to this end with whatever tools are at hand, doing so comes with technical and social barriers.

A tool like Backpad can facilitate prosocial behavior: organizing a surprise party, explaining some "special feature" of theirs... exposing [missing stairs](https://en.wikipedia.org/wiki/Missing_stair). Of course, knowing that other people may not just talking about you, but possibly _writing things down_ changes the social fabric of a group and may enable antisocial behaviors...

This project is a playful implementation of the ideas and prototype described in Seth Frey's [“Why can’t I work with this person?”: Your collaborator’s secret manual](https://enfascination.com/weblog/post/2506). My aim was to exercise my development skills to the test. It is _not_ intended for actual due to known technical deficiencies and unknown social side-effects!

Docs were read, IDE hints were heeded, no generative AI was used.

## Outline
* **v1.1**
    * error handling in forms (back to inputs)
    * warning if deleting in backpad
    * basic in-app onboarding
    * a comprehensive design
* **v1**
    * users create account
    * all users considered part of same group
    * users can:
        * see all other users
        * read and write on the pad every other user has

## Tech
* [Svelte & SvelteKit](https://svelte.dev/) - front & backend framework
* [Valibot](https://valibot.dev/) - data validation library
* [Better-auth](https://www.better-auth.com) - authentication library
* [Prisma](https://www.prisma.io/orm) - object relational mapper
* PostgreSQL - relational database management system
* node, typescript, vite...

## Setup
```bash
pnpm i
# adapt `.env.example` and rename `.env`
pnpx prisma@6 migrate dev --name init # issue with prisma 7 https://github.com/prisma/prisma/issues/28581
pnpx prisma@6 generate 
```

## Steps I took to set up
```bash
# created empty repo on github
git clone git@github.com:DougInAMug/backpad.git

# setup sveltekit
# https://svelte.dev/docs/kit/creating-a-project
pnpx sv create . # all defaults: minimal, TS, no add-ons

# prisma ORM setup
# https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql
service postgresql status # check postgres running
pnpm i prisma --save-dev
pnpx prisma init --datasource-provider postgresql --output ../node_modules/@prisma-generated/client # https://github.com/prisma/prisma/discussions/20200#discussioncomment-7441241
pnpx prisma migrate dev --name init

# prisma client setup
# https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction
pnpm i @prisma/client
pnpx prisma generate

# better-auth installation
# https://www.better-auth.com/docs/installation
pnpm add better-auth
```

# Todo
- [x] Make wireframes
    - Done on [Penpot](https://design.penpot.app/#/workspace?team-id=2a21f5ae-60ee-8151-8001-f7f599a9b6fe&file-id=20e128ff-6495-80ff-8007-11f639c8af4f&page-id=20e128ff-6495-80ff-8007-11f639c8af50)
- [x] Setup better-auth
- [x] Create sign-up, log-in, log-out flows
- [x] Adapt `User` data model from better-auth to contain `backpad`
- [x] Create view of backpads
    - [x] SELECT backpad FROM every user whose id != id of logged-in user
    - [x] display backpads as list. (See [details](https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/))
- [x] Make backpads editable. [Form actions](https://svelte.dev/docs/kit/form-actions).
- [x] Make it prettier
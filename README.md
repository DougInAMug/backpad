# backpad
Imagine a **pad attached to your back** that your colleauges could read and write, but you can't 🗒️ Don't worry: they all have one too! 😅

This would allow your colleagues to communicate your special features to new people, saving them from finding out the hard way. It could show up [missing stairs](https://en.wikipedia.org/wiki/Missing_stair) possibly bringing serious issues to resolution. Perhaps it enables new forms of bullying?

This idea comes from Seth Frey's [“Why can’t I work with this person?”: Your collaborator’s secret manual](https://enfascination.com/weblog/post/2506) and is mostly focussed on implementing the key feature without bigtech tooling.

## Outline
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

## Steps I took to set up
```bash
# created repo on github
git clone git@github.com:DougInAMug/backpad.git

# sveltekit setup
# https://svelte.dev/docs/kit/creating-a-project
pnpx sv create . # all defaults: minimal, TS, no add-ons
pnpm run dev # check all working

# prisma ORM setup
# https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgresql
service postgresql status # check postgres running
pnpm i prisma --save-dev
pnpx prisma init --datasource-provider postgresql --output ../generated/prisma
pnpx prisma migrate dev --name init

# https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction
pnpm i @prisma/client
pnpx prisma generate

```
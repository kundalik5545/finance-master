# Finance Master Setup

## Steps to create Finance Master

### Creating below folders

1. Actions - to write backend logic
2. DB - database config files
3. Main - to store all frontend pages
4. Prisma - to create database models

### Packages to install

1. Prisma
2. Shadcn
3.

### Shadcn command

```
npx shadcn@latest add button input label card textarea sonner select calendar table switch form pagination radio-group separator drawer skeleton tabs toggle tooltip avatar
```

### Prisma Setup

Run this command first to install prisma

```npm
npm install prisma --save-dev
```

Now run this to create .env file and prisma client and databaseurl setup

```npm
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

Set database credentials

Now runn this command to install prisma client

```npm
npm install @prisma/client
```

Now create database models

Now run to download prisma client

```npm
npx prisma generate
```

Now write code in db.config.js

```js
const { PrismaClient } = require("@/generated/prisma");

const prisma = new PrismaClient();

export default prisma;
```

Now run this command to migrate scheme to postgress

```npm
npx prisma migrate dev --name init
```

## Use form builder

https://www.shadcn-form.com/playground

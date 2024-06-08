## Bun+Prisma Seed test

package install

```bash
bun install
```

db migrate

```bash
bun run migrate
```

prisma client generate

```bash
bunx prisma generate
```

### db seed failed

Change prisma.seed in package.json to the following

```json
"prisma": {
  "seed": "bun ./prisma/seed_failed.ts"
}
```

Execute the following command

```bash
bun run db:seed
```

### db seed success

Change prisma.seed in package.json to the following

```json
"prisma": {
  "seed": "bun ./prisma/seed_success.ts"
}
```

Execute the following command

```bash
bun run db:seed
```

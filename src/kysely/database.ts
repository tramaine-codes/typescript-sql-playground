import SQLite from 'better-sqlite3';
import { FileMigrationProvider, Kysely, Migrator, SqliteDialect } from 'kysely';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import type { Database } from './types.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const dialect = new SqliteDialect({
  database: new SQLite(':memory:'),
});
const db = new Kysely<Database>({
  dialect,
});
const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, 'migrations'),
  }),
});

await migrator.migrateToLatest();

await db
  .insertInto('pet')
  .values({
    name: 'Beecee',
    species: 'dog',
  })
  .execute();

// eslint-disable-next-line no-console
console.log(await db.selectFrom('pet').selectAll().execute());

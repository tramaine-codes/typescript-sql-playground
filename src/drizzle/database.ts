import Database from 'better-sqlite3';
import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { pets } from './schema.js';

const sqlite = new Database(':memory:');
const db: BetterSQLite3Database = drizzle(sqlite);

migrate(db, { migrationsFolder: 'src/drizzle/migrations' });

await db.insert(pets).values([
  {
    name: 'Beecee',
    species: 'dog',
  },
  {
    name: 'Tom',
    species: 'cat',
  },
]);

// eslint-disable-next-line no-console
console.log(await db.select().from(pets));

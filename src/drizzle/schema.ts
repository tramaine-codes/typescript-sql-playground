import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const pets = sqliteTable(
  'pets',
  {
    id: integer('id', { mode: 'number' })
      .primaryKey({ autoIncrement: true })
      .unique(),
    name: text('name').notNull(),
    species: text('species').$type<'cat' | 'dog'>().notNull(),
  },
  (table) => [index('name_index').on(table.name)]
);

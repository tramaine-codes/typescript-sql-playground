import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dbCredentials: {
    url: ':memory:',
  },
  driver: 'better-sqlite',
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  strict: true,
  verbose: true,
});

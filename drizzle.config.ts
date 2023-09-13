import type { Config } from 'drizzle-kit';

export default {
  driver: 'better-sqlite',
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dbCredentials: {
    url: ':memory:',
  },
} satisfies Config;

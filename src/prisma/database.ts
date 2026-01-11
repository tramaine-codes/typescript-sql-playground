import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const adapter = new PrismaBetterSqlite3({
  url: `${process.env['DATABASE_URL']}`,
});
const prisma = new PrismaClient({ adapter });

// eslint-disable-next-line no-console
console.log(await prisma.pet.deleteMany());

const pet = await prisma.pet.create({
  data: {
    name: 'Beecee',
    species: 'dog',
  },
});
// eslint-disable-next-line no-console
console.log(pet);

const pets = await prisma.pet.findMany();
// eslint-disable-next-line no-console
console.log(pets);

await prisma.$disconnect();

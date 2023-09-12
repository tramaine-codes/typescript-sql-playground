import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

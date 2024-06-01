import type { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface Database {
  pet: PetTable;
}

export interface PetTable {
  id: Generated<number>;
  name: string;
  species: 'cat' | 'dog';
}

export type Pet = Selectable<PetTable>;
export type NewPet = Insertable<PetTable>;
export type PetUpdate = Updateable<PetTable>;

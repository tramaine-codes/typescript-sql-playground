import { DataTypes, Sequelize } from 'sequelize';
import { Pet } from './types.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
});

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.ENUM('cat', 'dog'),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pets',
  }
);

await sequelize.sync();

await Pet.create({
  name: 'Beecee',
  species: 'dog',
});

const pets = await Pet.findAll();
// eslint-disable-next-line no-console
console.log(pets);

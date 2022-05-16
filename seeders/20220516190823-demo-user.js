'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'César',
      password: 'constraseña',
      email: 'cmontero@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Sergio',
      password: 'constraseña',
      email: 'samarilla@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Brayan',
      password: 'constraseña',
      email: 'barvelo@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Pili',
      password: 'constraseña',
      email: 'pperez@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Belén',
      password: 'constraseña',
      email: 'bmontero@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Ivan',
      password: 'constraseña',
      email: 'iruiz@ilg.cat',
    }],{});

  }

};

  

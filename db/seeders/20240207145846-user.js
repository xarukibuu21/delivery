/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Потап',
        email: '1@1',
        password: '123',
        phone: '89011234567',
        isDeliver: false,
        address: 'ул. Профсоюзная, дом 100',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Федор',
        email: '2@2',
        password: '456',
        phone: '89101230987',
        isDeliver: false,
        address: 'ул. Вавилова, дом 11',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Иполит',
        email: '3@3',
        password: '789',
        phone: '89261231234',
        isDeliver: false,
        address: 'пр-кт. Ленинский, дом 45',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Филон',
        email: '4@4',
        password: '456',
        phone: '89346780923',
        isDeliver: true,
        address: 'ул. Гарибальди, дом 20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

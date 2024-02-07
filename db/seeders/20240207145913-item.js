/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      {
        title: 'бургер',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShC_2uYAlJER7LMlDHad6h--IIXK46GFCJCGlVkVlZam7RQ2eOD6UxkMZnGroPz7RMOH4&usqp=CAU',
        address: 'ул. Профсоюзная, дом 96',
        price: 400,
        sale: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'роллы',
        img: 'https://kd96.ru/netcat_files/kd96/item/5rollov.webp',
        address: 'ул. Академика Волгина, дом 16',
        price: 600,
        sale: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'пицца',
        img: 'https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg',
        address: 'ул. Обручева, дом 33',
        price: 700,
        sale: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'пироги',
        img: 'https://stolle-nn.ru/data/catalog/img/59f21c16ce8c5.jpg',
        address: 'ул. Островитянова, дом 7',
        price: 1700,
        sale: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'закуски',
        img: 'https://catering-muscat.ru/img/blog/recepty-mini-zakusok-dlya-fursheta/recepty-mini-zakusok-dlya-fursheta2.png',
        address: 'ул. Дмитрия Ульянова, дом 39',
        price: 800,
        sale: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'обед',
        img: 'https://caterme.ru/sites/default/files/Articles/164/caterme.ru_164_01.jpg',
        address: 'ул. Косыгина, дом, 10',
        price: 300,
        sale: 25,
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

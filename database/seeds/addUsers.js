const faker = require("faker");

exports.seed = async function (knex, Promise) {
  let fakeProducts = [];
  const desiredFakeProducts = 10000;
  for (let j = 0; j < 1000; j++) {
    for (let i = 0; i < desiredFakeProducts; i++) {
      let categories = ['Hockey', 'Syrup', 'Music', 'Camping', 'Hunting', 'Food'];
      fakeProducts.push({
        name: faker.lorem.word(),
        category: categories[(i % 6)]
      })
    }
    await knex("productInfo")
      .insert(fakeProducts)
    setTimeout(() => {fakeProducts = []}, 10);
  }
};

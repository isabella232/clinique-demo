const file = require('../Clinique CN ZHHANS all products.json');

const products = file.data.products.items;
// console.log(products[0]);

const mapped = products.map(p => {
  return { ...p, objectID: p.product_id };
});

require('fs').writeFileSync(
  '../cn-zhhans-products.json',
  JSON.stringify(mapped)
);

// const file = require('../us-products.json');

// console.log(file[0]);


const products = require('../products.json');

const getProducts = ('request, response') => {
  if (require.query.price) {
     const items = products.filter(val => val.price >= parseInt(require.query.price));
     return response.status(200).send(items);
  }
   response.status(200).send(products);
}

module.exports = getProducts





// const products = require('../products.json');


// // this is a controller/handler function is the callback of an endpoint request
// getProducts = (request, response) => {
//    response.status(200) .send(products)
// }

// module.exports = getProducts


// // ---------------------------STEP 5-------------------------------- // // 

// const products = require('../products.json');

// const getProducts = (request, response) => {

//    const item = products.find(val => val.id === parseInt(request.params.id));
//    if(!item) {
//       return response.status(500) .send('Item not in list');
//    }
//    response.status(200).send(item);
// }

// module.exports = getProducts


// // ---------------------------STEP 6------------------------------------ // // 

// const products = require('../products.json');

// const getProducts = ('request, response') => {
//   if (require.query.price) {
//      const items = products.filter(val => val.price >= parseInt(require.query.price));
//      return response.status(200).send(items);
//   }
//    response.status(200).send(products);
// }

// module.exports = getProducts
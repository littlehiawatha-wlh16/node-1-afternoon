const express = require('express');

const getProducts = require('./getProducts')

const app = express();
const port = 3001;

// this is an endpoint request 
app.get('/api/products',getProducts);

// another endpoint
app.get('/api/products/:id', getProducts);




app.listen(port, () => {
   console.log(/*'Server running on 3001'*/ `Server listening on port: ${port}`);
});



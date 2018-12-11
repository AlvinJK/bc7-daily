// @flow
let idCounter = 1;
let products = [];

export default function processNewProduct(request: *, response: *) {
  let payload = '';
  request.on('data', (data) => {
    payload = payload + data;
  });
  request.on('end', () => {
    let {product_name, brand, shop} = JSON.parse(payload);
    let newProduct = {
      id: idCounter++,
      name: product_name,
      brand: brand,
      shop: shop,
    };

    products = [...products, newProduct];
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({success: true, products: products}));
    response.end();
  });
}

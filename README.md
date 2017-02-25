##Product List – it is a simple web application based on nodejs in server side and html/css/javascript on client. 

This application presents a web store with opportunity to logged users manipulate with products.

Roles and REST api functions in application:

1. ADMIN:

>GET /products – load all products

>GET /product/id – load one product by id

>POST /new – add new product

>PUT /update– update information about product

>DELETE /delete – delete product

2. USER:

>GET /products – load all products

>GET /product/id – load one product by id

>GET /cart/products – load all products in cart

>POST /cart/new – add exists product to cart

>DELETE /cart/delete – delete product from cart

3. GUEST:

>GET /products – load all products

>GET /product/id – load one product by id
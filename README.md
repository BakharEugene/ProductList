##Product List – it is a simple web application based on nodejs in server side and html/css/javascript on client. 

This application presents a web store with opportunity to logged users manipulate with products.

Main functionality of project:
	
	- Registration and authorization to users;

	- Admin account with global priveleges;

	- Manipulation with products in list;

	- View product information;

	- Operations with users's cart;

##Roles:

	- ADMIN

	- USER

	- GUEST

##REST API in application:

Authorization:

	- POST /auth/register - register new user (username, password);

	- POST /auth/login - login page;

Operations with products (with roles):

	- GET /products – load all products (ADMIN, USER, GUEST);

	- GET /product/:id – load one product by id (ADMIN, USER, GUEST);

	- GET /cart/products – load all products in cart (USER);

	- POST /products – add new product (ADMIN);

	- PUT /product/:id– update information about product (ADMIN);

	- PUT /cart/product/:id – add exists product to cart (USER);

	- DELETE /product/:id – delete product (ADMIN);

	- DELETE /cart/product/:id – delete product from cart (USER);
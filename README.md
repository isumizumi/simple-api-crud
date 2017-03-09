# simple-api-crud
Mid Test_Phase 2

#### Description Program

Program ini untuk menyelesaikan tantangan Mid Test Phase 2 di Hacktiv8.
Terdapat 2 collection yaitu Foods dan Restaurant.

Adapun collection foods memiliki field name,  price, expired_date.
Sedangkan collection restaurants memiliki field name, owner,  address, serta open_status menunjukkan status dari restaurant sedang buka atau tidak.

#### Step by step

1. Readme.md
2. npm init
3. npm install (express generator, nodemon, mongodb, mongoose)
4. setting package.json & app.js
5. Create schema & models for collection Foods
6. Create controller for collection Foods
7. Create seed data for collection Foods
8. Create routes for collection Foods
9. Testing CRUD for collection Foods w/ Postman & Robomongo
10. Create schema & models for collection Restaurant
11. Create controller for collection Restaurant
12. Create seed data for collection Restaurant
13. Create routes for collection Restaurant
14. Testing CRUD for collection Restaurant
15. Refactoring

#### List of basic routes:

**Route**            |    **HTTP**   | **Description**
---------------------|---------------|------------------------
/                    | GET           | home
/foods               | GET           | get all foods
/food/search?id      | GET           | get one data foods
/food                | POST          | create data food
/food/:id            | PUT           | update data food
/food/:id            | DELETE        | delete data food
/restaurants         | GET           | get all restaurants
/restaurant/search?id| GET           | get one data restaurant
/restaurant          | POST          | create data restaurant
/restaurant/:id      | PUT           | update data restaurant
/restaurant/:id      | DELETE        | delete data restaurant

#### Using Seed

**Route**            |    **HTTP**   | **Description**
---------------------|---------------|------------------------
/seed/foods          | GET           | data food
/seed/restaurants    | GET           | data restaurant


### **USAGE**
#### With only npm:

>npm install <br>
>npm start <br>
>npm run dev <br>

#### Running mongod:
> sudo service mongod start <br>
> check connection @robomongo <br>

Access the website via http://localhost:3000/

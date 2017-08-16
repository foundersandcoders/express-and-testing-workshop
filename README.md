# express-and-testing-workshop
A Founders and Coders workshop to teach testing and express backend connected to a PostgresSQL DB.


Learning Outcomes
==

* Add Tests to an express backend server/API
* Integration testing
* Learn to add tests to Express JS Routes - testing that routes work as
  expected and return what is expected

## Introduction

* Express routes can be tested using TDD, to create a route in express you use
  `express.Router`.
* This is then added to the server as follows

```js
// In Routes.js
router.get('/', (res, req) => {
  //Do Stuff
})
// In Server.js
const app = express()
app.use('/api/v1/', routes)

//final route will be
/api/v1/
```

* In this workshop you will find a `server` and `database` folder. The database
  configuration has been setup for you, so you should not have to change any code in
  that folder but feel free to have a look.

* The objective of this workshop is to write integration tests for a backend
  server which has already been setup.

* The test you will right will ensure that rather than only on function working
  properly several interconnected functions all work to provide the desired
  functionality for the end user.

* In the server folder there is a `routes` subfolder inside of which all the
  servers routes have been written for you (using promises).

* Your test will ensure that not only these functions but also the database
  queries they depend on all work together to provide the information from each
  endpoint


## Requirements

* [Postman](https://www.getpostman.com/) is a tool which allows you test
  api endpoints to see what these return.
* An alternative is that you can use `curl` a command line took to ping an
  endpoint for example 
  ```sh
   curl http://www.example.org:1234/
  ``` 
  to check each endpoint (though
  this is slighty more involved and I recommend downloading postman).

## List of Endpoints
* `/facsters`
* `/facsters/:name` e.g. `facsters/amelie`
* `/facster/new` - This is a post request expecting an object
* `/facsters/:name/superpower`
* `/facsters/:name/hobby`

## Tasks
* `git clone` this repository, run `npm install`.
*  Run `createdb fac-express` - **IMPORTANT**
*  Setup the database by running `npm run build:db` - **IMPORTANT**
* `npm start` to begin the project.
* In **another** terminal pane run npm test.
* This repository provides you with a skeleton express server your task is to
  create tests for your express routes using TDD.

* inside `server.js` require in any necessary middleware.
* Then go to you test folder, and open `routes.test.js`
* Inside this file you will be using `tape` and `supertest`(a testing
  framework - [link to the docs!!](https://github.com/visionmedia/supertest))
* Whilst tape allows you to make assertions and check that things are equal
  etc. `supertest` will allow you to make requests to your server and expect
  certain results.
* Although `supertest` is new to you there is a whole wide world of
  frameworks and libraries in javascript (#JSFatigue) and learning to use the docs
  is probably half of what it means to be a good js developer.

* The structure of your tests should be
  ```js
  const test = require('tape')

  test('What your tests is testing', (t) => {
      supertest(app)
        .get('/facsters')
        .expect(200)
        .end(function(err, res) {
          /* INSERT TAPE TESTS HERE
          Don't forget to end your test */
        })
      })
  ```

* You will note that I have snuck promises into this workshop as they are an
  extremely common and important tool for handling asynchronicity and are
  well on their way to replacing callbacks.
* you won't be expected to use
  these but I have used then to make the queries so take a look, please ask if any of it is unclear.

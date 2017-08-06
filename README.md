# express-and-testing-workshop
A Founders and Coders workshop to teach testing and express backend connected to a PostgresSQL DB.


Learning Outcomes
==

* Use TDD to develop a backend server/API
* Learn to add tests to Express JS Routes - testing that routes work as
  expected and return what is expected

## Introduction

* Express routes can be tested using TDD, to create a route in express you use
  `express.Router`.
* This is then added to the server as follows

```js
// In Routes.js
app.get('/', (res, req) => {
  //Do Stuff
})
// In Server.js
const app = express()
app.use('/api/v1/', routes)

//final route will be
/api/v1/
```

* This allows your express routes to be modularised and for whole route trees
  to be added to your api.

## Tasks
* `git clone` this repository, run `npm install`.
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
  frameworks and libraries in javascript (#JSFatigue) and Learning the docs
  is probably half of what it means to be a good js developer.

* You will note that I have snuck promises into this workshop as they are an
  extremely common and important tool for handling asynchronicity and are
  well on their way to replacing callbacks

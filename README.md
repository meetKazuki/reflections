# Reflections

[![Build Status](https://travis-ci.org/meetKazuki/reflections.svg?branch=develop)](https://travis-ci.org/meetKazuki/reflections)
[![Coverage Status](https://coveralls.io/repos/github/meetKazuki/reflections/badge.svg?branch=develop)](https://coveralls.io/github/meetKazuki/reflections?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/56351b4274dea93c75d4/maintainability)](https://codeclimate.com/github/meetKazuki/reflections/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/56351b4274dea93c75d4/test_coverage)](https://codeclimate.com/github/meetKazuki/reflections/test_coverage)

> _Success is not final; failure is not fatal; It is the courage to continue that counts  -- *Winston S. Churchill*_

## Overview

This project aims to help users reflect and document their daily successes, failures, and plan on what to do better the next day. You can check a live demo [here]().

## Technologies Used 🛠
---
* ES6
* NodeJS
* Express
* PostgreSQL

## Getting started :rocket::rocket::rocket:
---

### Prerequisites

Ensure that you have the following installed on your local machine:
- [NodeJS](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Run locally
- To run app locally, make sure you have `NodeJS`, `PostgreSQL` installed.
- Clone this repository

  ```bash
    git clone https://github.com/meetKazuki/reflections.git
    cd reflections
    npm install
  ```

- Create a database (I'm assuming you have installed PostgreSQL by now) either using `pgadmin` or by running the command on your terminal:

    ```bash
      createdb -h localhost -p 5432 -U postgres reflection_db
    ```

- Configure `.env` environment variable with your credentials (at the root of the project folder)
- `npm run dev-start` to start the server and watch for file changes

### Testing
- You can test the api locally using [*Postman*](https://www.getpostman.com)
- Run `npm test` for automated testing (_please refer to issue 2_).

### HTTP Response Codes
- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed request)
- `404` `Not found` An attempt was made to access a resource that does not exist in the API
- `500` `Server Error` An error on the server occured

### Issues
---
1. A big part of this code is not functioning properly 😢. For some reason, the token provided after you login is always invalid (I think it's a problem with the `Auth` middleware)
2. The tests also are not really comprehensive. I'm still struggling to get a hang of this TDD stuff 😿. Make it better if you can 😄.

### ToDo ✔️
---
1. Fix issue with authentication
2. Set it up on Heroku
3. Implement a frontend

### Credits/Resources :open_hands:
----
1. This project was originally written by a very wonderful individual [Olawale Aladeusi
](https://www.codementor.io/olawalealadeusi896). You can follow his guide [here](https://www.codementor.io/olawalealadeusi896/building-simple-api-with-es6-krn8xx3k6)
2. [Harry Dbrandy]() for guide on setting up an organized project architecture
3. [Chris Marcel](https://github.com/Chrismarcel/iReporter.git) for help with Test-Driven Development

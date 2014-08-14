
# Introduction

This project shows an example solution to Stack Overflow Question [25244994](http://stackoverflow.com/questions/25244994/angularjs-how-to-init-resource-with-string-first-downloaded-from-http).

# Installation

Follow the guidelines given in the two tutorials:

* Install [Node.js](http://nodejs.org/).
* Install Express:


    $ npm install -g express
    $ npm install -g express-generator

* Install [MongoDB](https://www.mongodb.org). Start the daemon.
* Install `node_modules`:


    $ npm install

As an additional step, to get some initial data to the database:

    $ mongo db-init/mean-template-init.js

# Execution

Start the server:

    $ npm start

Open the URL in a browser: `http://localhost:3000/`

If everything works as supposed, the browser will alert "ok".

# Version History

* v.1.0: The first functional version.

# License

The MIT License
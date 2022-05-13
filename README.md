## Tiny Micro
![example workflow](https://github.com/E-wave112/tiny-micro/actions/workflows/build.yml/badge.svg) ![GitHub](https://img.shields.io/github/license/E-wave112/tiny-micro)

* simple collision resistant microservice controller function for generate a number of sequential ids.

### This function assumes the following functionalities and constraints.

- the micro service controller logic is proven to be collision resistant due to the usage of the RFC4122 compliant [uuid](https://www.npmjs.com/package/uuid) package
- For server disturbances in the microservice (server restarts e.t.c), a global state is set in the function to handle this
- a global state variable with a value of ```true``` inidcates that the server is operational,a value of ```false``` indicates otherwise.
- There are configurable starting points to generate the number of sequential ids.
- The number of sequential ids to be generated by a user at one instance are capped at 500
(this helps for handling the load requests on the server)


### Install Pacakges

```
$ npm install

```
Then you can then finally test out multiple instances of the microservice controller like so:
- call the ```instantiateTestIds``` function  in the```src/index.ts``` file with the required arguments

- Run the command:

```
$ npm run dev

```
or

```
$ npm run start

```

### Running Tests
Run functional tests on the function like so:

```
$ npm run test
```

To get the code coverage use the command:

```
$ npm run test:cov
```
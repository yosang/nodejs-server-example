# NodeJS Server

A demonstration of a simple server created with NodeJS

## Installation

Clone the project with

```sh
git clone https://github.com/yosang/node-server-example
```

## Server

### Start the test server

A test server is provided to showcase how a server can be created with NodeJS.

Make sure you are in the server folder, if not change the directory with the following command:

```sh
cd server
```

Start the test server with the following command:

```sh
npm start
```

The test server will run on port `3000`

Available methods: `GET`, `POST`, `PUT`, `DELETE`  
Available endpoints: `/`, `/pizzas`, `/carros`

### Start the API server

Make sure you are in the server folder, if not change the directory with the following command:

```sh
cd server
```

Start the API server with the following command:

```sh
npm run api
```

The test server will run on port `3001`

Available methods: `GET`
Available endpoints: `/pizzas`, `/carros`

## Client

The client is designed to test the API server, run `index.html` from LiveServer extension in VSCode to see it in action.

Make sure the API server is running before using the client.

## Author

[Yosmel Chiang](https://github.com/yosang)

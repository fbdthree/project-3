const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");


const { config, db } = require('./config/index');

const { NODE_ENV, PORT } = config;
const app = express();
app.use(express.json());



app.listen(PORT, ()=>
console.info(`Apollo Server Exresss App listening on http://localhost:${PORT}`)
);
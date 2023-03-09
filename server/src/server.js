import express from "express";
import {} from "apollo-server-express";
import {} from "graphql";

import { config, db } from './config/index'

const { NODE_ENV, PORT } = config;

const app = express();
app.use(express.json());

app.listen(PORT, ()=>
console.info(`Apollo Server Exresss App listening on http://localhost:${PORT}`)
)
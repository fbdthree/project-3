const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { config, db } = require('./config/index');
const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')
const {authMiddleware} = require("../utils/auth")

const { NODE_ENV, PORT } = config;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
const startApolloServer = async (typeDefs,resolvers) =>{
  await server.start()
  server.applyMiddleware({app})
  db.once('open',()=>{

    app.listen(PORT, ()=>
    console.info(`Apollo Server Exresss App listening on http://localhost:${PORT}`)
    )
  })
}


startApolloServer(typeDefs,resolvers)

  
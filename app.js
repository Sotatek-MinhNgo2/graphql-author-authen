const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { applyMiddleware } = require("graphql-middleware");
const { verify } =  require("jsonwebtoken");
const { private_key } =  require("./data/static");

// Load schema  & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const {makeExecutableSchema} = require('@graphql-tools/schema')

// Load db methods 
const mongoDataMethods = require('./data/db');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ngotuanminh98:tuanminh123@Cluster0.4vywh.mongodb.net/Cluster0?retryWrites=true&w=majority`, {})
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error.message);
    }
}
connectDB()

const isPrivated = async (resolve, parent, args, context, info) => {
    const { user } = context;
    const { roles } = user;
    if (!roles || !roles.includes("admin")) {
        throw new Error(`Access privated field not allow`)
    }
    return resolve();
}

const permissions = {
    Query: {
        authors: isPrivated,
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const protectedSchema = applyMiddleware(schema, permissions)

const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    context: async ({req, res}) => {
        const token = req.headers?.authorization?.split(" ")[1] || '';
        const { id: userId} = verify(token, private_key);
        const user = await mongoDataMethods.getUserById(userId);
        return {mongoDataMethods, user}
    },
    schema: protectedSchema,
    request: operation => {
        // const accessToken = access_token;
        // if (accessToken) {
        //     operation.setContext({
        //         headers: {
        //             authorization: `bearer ${accessToken}`,
        //         }
        //     })
        // }
    },
})

const app = express();
(async() => {
    await server.start();
    server.applyMiddleware({ app })
})();

app.listen({port: 4000}, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
})
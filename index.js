import { GraphQLServer } from "graphql-yoga";
import resolver from "./graphql/resolver";
//const graphqlYoga = require("graphql-yoga");

//import {} from "graphql-yoga"; typescript 방식
// console.log("movieql");
//
console.log("before begin");
//
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolver,
  //resolvers   => 이렇게만 써도 modern js에선 된다
});

server.start(() => console.log("GraphQLServer is running"));

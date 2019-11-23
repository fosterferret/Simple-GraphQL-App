const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://francis:mo@cluster0-03hwy.mongodb.net/test?retryWrites=true&w=majority",
  { dbName: "graphql-ninja", useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("motherfucker dhdhhdhdhd");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log(`Listening for requests on port 5000`);
});

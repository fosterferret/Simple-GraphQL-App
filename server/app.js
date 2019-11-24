const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


app.use(cors());

mongoose.connect(
  "mongodb+srv://francis:mo@cluster0-03hwy.mongodb.net/test?retryWrites=true&w=majority",
  { dbName: "graphql-ninja", useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("I AM BATMANNNNN");
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

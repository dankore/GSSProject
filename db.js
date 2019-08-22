const MongoClient = require("mongodb").MongoClient;

const dotenv = require("dotenv");
dotenv.config();

MongoClient.connect(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(function(client) {
    module.exports = client;
    const app = require("./app");
    app.listen(process.env.PORT);
  })
  .catch(err => console.error(err));

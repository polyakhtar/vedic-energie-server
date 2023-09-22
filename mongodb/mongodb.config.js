
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kkprfvy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbConnect = async () => {
    try {
      await client.connect();
      console.log("Database is connected");
    } catch (err) {
      res.send({
        success: false,
        error: err.message,
      })
    }
  };
  
  module.exports = { dbConnect, client };

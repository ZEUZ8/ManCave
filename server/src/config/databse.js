const mongoose = require("mongoose");

async function Connect(server) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connected succesfully");
      if(server) server()
    });
    connection.on("error", () => {
      console.log(
        "MongoDB connection erorr. please make sure MongoDB is running"
      );
      process.exit();
    });
  } catch (err) {
    console.log(err, " error in the mongodb Connection");
  }
}

module.exports = { Connect };

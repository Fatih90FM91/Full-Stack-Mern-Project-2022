// const mongoose = require('mongoose');

// const db = process.env.MONGO_URI;

// mongoose.connect(db)
//     .then(() => console.log('Connected to DB ...'))
//     .catch(err => console.log(err))

const {MONGODBATLAS , MONGOCOMPAS} =process.env;
const result ="";

    const mongoose = require("mongoose");

const connectDB = async () => {
 // const DATABASE = MONGODBATLAS==undefined ? MONGOCOMPAS : MONGODBATLAS;

  try {
    await mongoose.connect(process.env.MONGODB_URI || MONGODBATLAS, {
      useNewUrlParser: true,
      // useFindAndModify: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    });

    console.log("MongoDB Connection Success 👍");
  } catch (error) {
    console.log("MongoDB Connection Failed 💥");
    console.log(error)
    //result = error.MongooseServerSelectionError
    console.log(result);

    process.exit(1);
  }
};

module.exports = connectDB;
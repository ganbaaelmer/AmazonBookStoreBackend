const mongoose = require("mongoose");
//MONGODB_URI=mongodb+srv://amazon123:amazon123@amazon-bljjs.mongodb.net/amazon?retryWrites=true&w=majority
//mongodb+srv://ganbaa:amazon123@cluster0.dqmlvg7.mongodb.net/

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });

  console.log(
    `MongoDB холбогдлоо : ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;

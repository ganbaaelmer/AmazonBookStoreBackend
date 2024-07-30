const mongoose = require("mongoose");
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

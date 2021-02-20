const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://username:Password123@cluster0.yavfl.mongodb.net/mernDB?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log("mongodb works")
})
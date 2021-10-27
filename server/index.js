const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const authRoute = require("./controller/auth");

const app = express();
const port = process.env.port || 9000;

mongoose.connect(
  "mongodb+srv://teszteles:Teszteles@firstcluster.26kgy.mongodb.net/szakdolgozat?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/user", authRoute);

const server = app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`);
});

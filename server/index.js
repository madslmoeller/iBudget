const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://madslmoeller:Mindbkode043@cluster0.wfb6ywc.mongodb.net/reactproject?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/getUsers", async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

app.listen(3001, () => {
  console.log("Kører på port 3001...");
});

// app.get("/", (req, res) => {
//   res.send("backend test...");
// });

// app.get("/getUsers", (req, res) => {
//   UserModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

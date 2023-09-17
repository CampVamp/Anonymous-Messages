import express from "express";
import db from "./database";
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;

const db1 = db.db("Cluster0");
const collection = db1.collection("Messages");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const allData = await collection.find().toArray();
    res.status(200).json(allData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

app.post("/addmsg", async (req, res) => {
  try {
    const data = req.body;
    const result = await collection.insertOne(data);
    if (result) {
      res.status(200).json({ status: "success", message: "Message Added" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}....`);
});

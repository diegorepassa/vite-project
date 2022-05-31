import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();
const uri =
  "mongodb+srv://admin:123@cluster0.2hxqm.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

// listen to 8080 port
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(uri)
  .then((client) => {
    console.log("Connected to MongoDB"); // message to connect at MongoDB
    const db = client.db("start-wars-depoimentos"); // database name (a room)
    const depoimentosCollection = db.collection("depoimentos"); // collection name (boxes in a room)

    // post request to save data in database (collection)
    app.post("/depoimentos", (req, res) => {
      depoimentosCollection
        .insertOne(req.body)
        .then((result) => {
          console.log("Depoimento inserido no banco com sucesso");
          res.redirect("/");
        })
        .catch((err) => console.error(err));
    });

    app.get("/", (req, res) => {
      depoimentosCollection
        .find()
        .toArray()
        .then(results => {
          console.log(results);
        })
        .catch(error => console.error(error));
    });
  })
  .catch(console.error);

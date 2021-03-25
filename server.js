const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbUrl =
  "mongodb+srv://User:1234@cluster0.g4zhg.mongodb.net/Edyoda?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err));

db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.set('view engine','hbs');

app.get("/",(req,res)=>{
  res.writeHead(200, {"content-type": "text/html"});
  res.end("<h2>Server is running</h2>");
});

const playerRouter = require('./routes/getPlayerInfo');

app.use("/players",playerRouter);

app.listen(8000, () => {
  console.log("listening on port 8000");
});

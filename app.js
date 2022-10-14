import express from "express";
import bodyParser from "body-parser";
import path from "path";
import data from "./events.json" assert { type: "json" };

const app = express();
app.listen(3000);

//body-parser allows the accessing of the post body with req.body in function below ***
app.use(bodyParser.json());

//Allows the serving of static files
app.use(express.static("public"));

//This prevents cors errors in the browser.
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/events", (req, res) => {
  res.header("content-type", "application/json");
  res.send(JSON.stringify(data));
});

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from "Public" folder
app.use(express.static(path.join(__dirname, "Public")));

//Bodyparser for form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/printing", (req, res) => {
  res.render("printing");
});

app.get("/design", (req, res) => {
  res.render("design");
});

app.get("/finishing", (req, res) => {
  res.render("finishing");
});

app.get("/training", (req, res) => {
  res.render("training");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

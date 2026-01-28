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

//Routes
app.get("/", (req, res) => res.render("index"));
app.get("/home2", (req, res) => res.render("home2"));
app.get("/home3", (req, res) => res.render("home3"));
app.get("/services", (req, res) => res.render("services"));
app.get("/services1", (req, res) => res.render("services1"));
app.get("/service-details", (req, res) => res.render("services-details"));
app.get("/about", (req, res) => res.render("about"));
app.get("/request-quote", (req, res) => res.render("request-quote"));
app.get("/tracking", (req, res) => res.render("tracking"));
app.get("/team", (req, res) => res.render("team"));
app.get("/team-details", (req, res) => res.render("team-details"));
app.get("/shop", (req, res) => res.render("shop"));
app.get("/product-details", (req, res) => res.render("product-details"));
app.get("/cart", (req, res) => res.render("cart"));
app.get("/checkout", (req, res) => res.render("checkout"));
app.get("/login", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("register"));
app.get("/pricing", (req, res) => res.render("pricing"));
app.get("/faq", (req, res) => res.render("faq"));
app.get("/error", (req, res) => res.render("error"));
app.get("/projects", (req, res) => res.render("projects"));
app.get("/projects2", (req, res) => res.render("projects2"));
app.get("/project-details", (req, res) => res.render("project-details"));
app.get("/blog-grid-01", (req, res) => res.render("blog-grid1"));
app.get("/blog-grid-02", (req, res) => res.render("blog-grid2"));
app.get("/blog-classic", (req, res) => res.render("blog-classic"));
app.get("/single-post-01", (req, res) => res.render("single-post1"));
app.get("/single-post-02", (req, res) => res.render("single-post2"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/cart", (req, res) => res.render("cart"));
app.get("/single-service", (req, res) => res.render("single-service"));
app.get("/single-case-study", (req, res) => res.render("case-study"));

//start server
app.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});

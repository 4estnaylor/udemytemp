const path = require("path");

const express = require("express");
const hbs = require("hbs");
const hbsutils = require("hbs-utils")(hbs);

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = 3000;

const publicRoute = path.join(__dirname, "../public");
const viewsRoute = path.join(__dirname, "../templates/views/");
const partialsRoute = path.join(__dirname, "../templates/partials/");

app.set("view engine", "hbs");
app.set("views", viewsRoute);
app.use(express.static(publicRoute));

hbs.registerPartials(partialsRoute);
hbsutils.registerWatchedPartials(partialsRoute);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Forrest Naylor",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Forrest Naylor",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Forrest Naylor",
  });
});

app.get("/*", (req, res) => {
  res.render("404", {
    title: "404 Error",
    name: "Forrest Naylor",
  });
});

app.listen(port, () => {
  console.log("server is up on port 3000");
});

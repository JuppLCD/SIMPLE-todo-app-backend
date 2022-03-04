const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
const app = express();

// Import routes
const TodoRoute = require("./routes/route");

// Settings
app.set("port", process.env.PORT || 8080);
// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use(TodoRoute);

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
	res.status(404).send("Not found");
});

module.exports = app;

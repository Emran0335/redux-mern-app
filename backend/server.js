const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;
connectDB();

const app = express();

// middleware to get body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
// errorhandler middleware. It will ride over the express error message
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

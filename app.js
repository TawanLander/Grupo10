require("dotenv").config({ path: ".env" });

const express = require("express");
const cors = require("cors");
const path = require("path");

const PORTA_APP = process.env.APP_PORT;
const HOST_APP = process.env.APP_HOST;

const app = express();

const indexRouter = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);

app.listen(PORTA_APP, function () {
    console.log("LIGOU");
});
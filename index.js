const express = require("express");
const cors = require("cors");
const routes = require("./routes/postsRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, console.log("SERVIDOR ENCENDIDO"));

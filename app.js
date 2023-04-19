const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');
const router = require("./routes/routes");
require("./db/db");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/project", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

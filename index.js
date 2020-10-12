const express = require("express");
// import bodyParser from "bodyParser";

const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => console.log(`connected successfully ${port}`));

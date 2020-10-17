const express = require("express");
// import bodyParser from "bodyParser";
let userRouter = require("./Routes/user");

const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => console.log(`connected successfully ${port}`));

app.get("/users", userRouter);
app.post("/create", userRouter);

app.get("/", (req, res) => {
  //   console.log("[test]");
  res.send("hello from home page");
});

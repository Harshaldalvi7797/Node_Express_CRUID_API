const express = require("express");
const router = express.Router();
const users = [
  {
    name: "Harshal",
    lname: "Dalvi",
    age: 20
  }
];

// let user = [];
router.get("/users", (req, res) => {
  console.log(users);
  res.send(users);
});
router.post("/create", (req, res) => {
  const user = req.body;
  users.push(user);
  console.log(`User with the name ${user.name} ${user.lname}`);
  res.send(user);
});
module.exports = router;

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const users = [];

// let user = [];
router.get("/users", (req, res) => {
  console.log(users);
  res.send(users);
});
router.post("/create", (req, res) => {
  const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const user = req.body;

  // const userWithId = { ...user, id: uuidv4 };
  users.push({ ...user, id: uuidv4() });
  console.log(
    `User with the name ${user.name} ${user.lname} ${user.id} addedd successfully`
  );
  res.send(user);
});

router.get("/:id", (req, res) => {
  const { id, name } = req.params;
  users.find(user => users.id == id);
  console.log(req.params);
  res.send(req.params);
});

module.exports = router;

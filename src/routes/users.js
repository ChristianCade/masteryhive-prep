import express from "express";

const router = express.Router();

// Temporary in-memory "database"
let users = [
  { id: 1, name: "Ifeanyi", age: 25 },
  { id: 2, name: "Christian", age: 24 },
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET user by ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST new user
router.post("/", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users[index] = { id, ...req.body };
  res.json(users[index]);
});

// DELETE user
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted" });
});

export default router;

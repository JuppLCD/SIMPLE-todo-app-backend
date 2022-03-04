const express = require("express");
const router = express.Router();
const { allTodos, newTodo, deleteTodo, updateTodo } = require("./controller");

router.get("/allTodos", allTodos);
router.post("/newTodo", newTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/updateTodo/:id", updateTodo);

module.exports = router;

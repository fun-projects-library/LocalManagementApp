module.exports = app => {
    const todos = require("../controllers/todos.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Todo Item
    router.post("/", todos.create);
  
    // Retrieve all Todo Items
    router.get("/", todos.findAll);
  
    // Retrieve all completed todos
    router.get("/completed", todos.findAllCompleted);
  
    // Retrieve a single Todo with id
    router.get("/:id", todos.findOne);
  
    // Update a Todo with id
    router.put("/:id", todos.update);
  
    // Delete a Todo with id
    router.delete("/:id", todos.delete);
  
    // Delete all Todo items
    router.delete("/", todos.deleteAll);
  
    app.use('/api/todos', router);
  };
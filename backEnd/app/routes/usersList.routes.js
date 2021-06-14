module.exports = app => {
    const usersList = require("../controllers/usersList.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", usersList.create);
  
    // Retrieve all Users
    router.get("/", usersList.findAll);
  
    // Retrieve all completed usersList
    //router.get("/completed", usersList.findAllCompleted);
  
    // Retrieve a single User with id
    //router.get("/:id", usersList.findOne);
  
    // Update a User with id
    router.put("/:id", usersList.update);
  
    // Delete a User with id
    router.delete("/:id", usersList.delete);
  
    // Delete all Users
    //router.delete("/", usersList.deleteAll);
  
    app.use('/api/usersList', router);
  };
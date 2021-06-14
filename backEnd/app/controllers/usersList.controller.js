const db = require("../models");
const User = db.users;


exports.create = (req,res) => {
    if(!req.body){
        res.status(404).send({message: "Content cannot be empty!"})
        return;
    }


    const user = new User({
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email
    })

    user.save()
    .then(data=>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message: 
            err.message || "Some error occurred while creating the User."
        })
    })
}


exports.findAll = (req,res)=>{
    let condition = {};
    User.find(condition)
    .then(data =>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: 
            err.message || "Some error occurred while retrieving Users"
        })
    })
}


exports.update = (req,res)=> {
    const id = req.params.id
    User.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({
                message: `Cannot update User with id=${id}. Maybe User was not found.`
            })
        } else {
            res.send({message: "User was updated successfully."})
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe user was not found!`
        });
      } else res.send({ message: "User was deleted successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting user with id=" + id
      });
    });
  };
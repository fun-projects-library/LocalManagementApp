module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        username: String,
        email: String,
        phone: Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("userList", schema);
    return User;
  };
const mongoose = require("mongoose");

// const usersSchema = new mongoose.Schema({

// })

const userSchema = new mongoose.Schema({
    Fname: {
      type: String, 
    },
    age: {
      type: Number,
    },
    sex: {
      type: String,
      
    },
    email: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
      required: false,
    },
    emergencyContact: {
      type: String,
      required: false,
    },
    country: {
        type:String
    },
    state: {
        type:String
    },
    religion: {
        type:String
    },
    address: {
        type:String
    },
    pincode: {
        type:String
    },
    city: {
        type:String
    },
    bloodGroup: {
        type:String
    },
    maritalStatus: {
        type:String
    },
    occupation: {
        type:String
    }
    // govtIdType: {
    //   type: String,
    //   required: false,
    // },
    // govtId: {
    //   type: String,
    //   required: false,
    // },
  });
  
  module.exports = mongoose.model('User', userSchema);
  
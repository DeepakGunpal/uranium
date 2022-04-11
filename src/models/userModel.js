const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName:  String, // String is shorthand for {type: String}
  lastName: String,
  mobile:   {
      type: String,
     unique:true,
     required:true
    },
    emailId: String,
    gender: {
        type:String ,
        enum: ["Male","Female","LGBTQ"]//Anything else will give an error
    },
    age: Number,
    isIndian:Boolean,
    familyInfo:{
        motherName: String,
        fatherName:String,
        siblingName:String
    },
    cars:[String]
    // createdAt:Date, //this will be created bcoz of timestamps thing written below
},{timestamps: true});//whenever this document is created or updated record time

module.exports = mongoose.model('user',userSchema)//users  // mugup this syntax for now

//String, Number
//Boolean,Objects,Array

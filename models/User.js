const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },

    email:{
        type:String,
        required:true,
        max:30,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:7
    },
    profilepic:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
   
},
    {timestamps:true}
)

module.exports=mongoose.model("User",UserSchema)
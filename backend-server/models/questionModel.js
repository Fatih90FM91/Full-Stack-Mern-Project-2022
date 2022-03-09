const mongoose = require('mongoose');
const Schema =require('mongoose');
const  User =require('../models/userModel');
const  User2 =require('../models/socialModel');
const mySchema = mongoose.Schema;

const questionSchema = new mySchema({

        question:{
            type:String,
            required:true,
            
            
            
        },
       description:{
            type:String,
            required:true,
            
            
            
        },
        created_at:{
            type:Date,
            default:Date.now()
        },
        

        user_id: 

        {    type: Schema.Types.ObjectId,
             ref: User,User2
         }
    ,


})

const Question = mongoose.model('question', questionSchema);

module.exports = Question;

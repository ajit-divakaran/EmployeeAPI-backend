const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName:{
            required:true,
            type:String
        },
        age:{
            required:true,
            type:String
        },
        email:{
            required:true,
            type:String
        },
        status:{
            default:'active',
            type:String
        }

    }
)

const users = mongoose.model('users',userSchema);

module.exports = users
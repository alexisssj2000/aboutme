import mongoose from "mongoose";

const userSchema = mongoosel.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }

})

export default mongoose.model('User', userSchema);
import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    url:{
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true,
        enum: ['web', 'mobile','iot','desktop','other'],
        trim: true
    },
     img:{
        type: String,
        required: true,
    },
    
    
},
    {
        timestamps:true
    }
)

export default mongoose.model('Project', projectSchema)
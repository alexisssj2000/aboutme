import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
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
    }, 

},
{
        timestamp:true

})
    userSchema.methods.comparePassword = async function (candidatePassword) {
    // 'this.password' is the hashed one in the DB
    return await bcrypt.compare(candidatePassword, this.password);
    };
userSchema.pre('save', async function () {
    if(!this.isModified('password')) return;

    try {
        const salt = await bcrypt.genSalt(12)

        this.password = await bcrypt.hash(this.password, salt)
    } catch (error) {
        console.log(error)
        throw error
    }
})

export default mongoose.model('User', userSchema);
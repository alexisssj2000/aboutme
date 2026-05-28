import User from "../models/user.model.js"
import  jwt from "jsonwebtoken"
import { logger } from "../utils/logger.js"

export const register = async (req, res) => 
{
    const {
        username,
        email,
        password,
    }= req.body
    try {
        const newUser = new User({
        username,
        email,
        password,
        }
        )
        await newUser.save()
        console.log("User register susesfuly")
    } catch (error) {
        logger.error(`Error registering user: ${error.message}`);
        res.status(500).json({error: error.message})

    }

    res.send('Registrando')
}

export const login = async (req, res) => {
    
    try {
        const {email, password} = req.body

        const user = await User.findOne({email});

        if (!user){
            return res.status(404).json({message: "Unregister user"})
        }

        const isMatch = await user.comparePassword(password)

        if (!isMatch) {
            return res.status(400).json({message: "invalid credentials"})
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        )

        res.status(200).json({
            message: "login susesfuly",
            tokens,
            user: {id: user.id, username: user.username, email: user.email}
        })

    } catch (error) {
        logger.error(`Error fetching login: ${error.message}, User Email: ${req.body.email}`);

        res.status(500).json({message:"somethig happen"})
    }


}

export const allUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")
        res.status(200).json(users)
    } catch (error) {
        logger.error(`Error fetching users: ${error.message}`);
        res.status(500).json({message: "somethig happen"})
    }
}  
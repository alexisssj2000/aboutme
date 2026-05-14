import User from "../models/user.model.js"

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
        console.log("Upps somethig happen")
        res.status(500).json({error: error.message})

    }

    res.send('Registrando')
}

export const login = (req, res) => {
    



}
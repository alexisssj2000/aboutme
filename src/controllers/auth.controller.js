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

        res.status(200).json({
            message: "login susesfuly",
            user: {id: user.id, username: user.username, email: user.email}
        })

    } catch (error) {
        res.status(500)-json({message:"somethig happen"})
    }


}
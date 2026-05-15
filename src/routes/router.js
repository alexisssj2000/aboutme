import express from "express"
import {login, register} from "../controllers/auth.controller.js"
import verifyToken from "../middlewares/auth.middleware.js"

const router = express.Router()

const path = "api/"

router.post(`/register`  , register)
router.post('/login', login)

router.get('/profile', verifyToken, (req,res) => {
    res.status(200).json({
        message: "welcome",
        userId: req.user.id
    })
})




export default router

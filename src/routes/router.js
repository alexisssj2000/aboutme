import express from "express"
import multer from "multer"
import {uploadImg} from "../middlewares/project.middleware.js"
import {login, register} from "../controllers/auth.controller.js"
import verifyToken from "../middlewares/auth.middleware.js"
import { createProject } from "../controllers/project.controller.js"

const router = express.Router()

const path = "api/"

router.post(`/register`  , register)
router.post('/login', login)
router.post('/projects', verifyToken, uploadImg.single('img'), createProject);

router.get('/profile', verifyToken, (req,res) => {
    res.status(200).json({
        message: "welcome",
        userId: req.user.id
    })
})




export default router

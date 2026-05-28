import express from "express"
import multer from "multer"
import {uploadCertificates, uploadImg} from "../middlewares/project.middleware.js"
import {allUsers, login, register} from "../controllers/auth.controller.js"
import verifyToken from "../middlewares/auth.middleware.js"
import { createProject, getProjects } from "../controllers/project.controller.js"
import { createCertificate, getCertificates } from "../controllers/certificates.controller.js"


const router = express.Router()

const path = "api/"

router.post(`/register`  , register)
router.post('/login', login)
router.get('/users', verifyToken, allUsers)



router.post('/projects', verifyToken, uploadImg.single('img'), createProject);
router.get('/getProjects', getProjects)



router.post('/certificates', verifyToken, uploadCertificates.single('img'), createCertificate);
router.get('/getCertificates', getCertificates)

router.get('/profile', verifyToken, (req,res) => {
    res.status(200).json({
        message: "welcome",
        userId: req.user.id
    })
})




export default router

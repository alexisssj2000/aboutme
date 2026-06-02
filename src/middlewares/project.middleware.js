import multer from "multer";
import path from 'path'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createUploader = (foldername)=> {
    const storage = multer.diskStorage({
        destination: function (req, file, cb){
            cb(null, `src/uploads/${foldername}`)
        },
        filename: function (req, file, cb){
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, uniqueSuffix + path.extname(file.originalname));
        }
    })
        
    return multer({storage: storage, limits:{fileSize: 5 * 1024 * 1024}})

}


export const uploadImg = createUploader('projects')
export const uploadCertificates = createUploader('certifi')
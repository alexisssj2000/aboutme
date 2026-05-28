import Certificate from "../models/certificates.model.js";
import { logger } from "../utils/logger.js";


export const createCertificate = async (req, res) => {
    try {
        const { name, description, issuer, issueDate, credentialUrl} = req.body;
        
        // If a file was uploaded, multer puts it in req.file
        // We get the path so we can save it to the database
        const imagePath = req.file ? req.file.path : null;

        const newCertificate = new Certificate({
            user: req.user.id, // From your verifyToken middleware
            name,
            description,
            issuer,
            issueDate,
            credentialUrl,
            img: imagePath
        });

        await newCertificate.save();
        logger.info(`Certificate created successfully: ${newCertificate.name}, User ID: ${req.user.id}`);
        res.status(201).json(newCertificate);
        
    } catch (error) {
        logger.error(`Error creating certificate: ${error.message}, User ID: ${req.user.id}`);
        res.status(500).json({ error: error.message });
    }
};

export const getCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.status(200).json(certificates);
    } catch (error) {
        logger.error(`Error fetching certificates: ${error.message}`);
        res.status(500).json({ error: error.message });
    }  
}
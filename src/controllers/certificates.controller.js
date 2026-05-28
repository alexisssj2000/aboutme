import Certificate from "../models/certificates.model.js";


export const createCertificate = async (req, res) => {
    try {
        const { name, description, issuer, issueDate, credentialUrl} = req.body;
        
        // If a file was uploaded, multer puts it in req.file
        // We get the path so we can save it to the database
        const imagePath = req.file ? req.file.path : null;

        const newProject = new Certificate({
            user: req.user.id, // From your verifyToken middleware
            name,
            description,
            issuer,
            issueDate,
            credentialUrl,
            img: imagePath
        });

        await newProject.save();
        res.status(201).json(newProject);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCertificates = async (req, res) => {
    try {
        
        const certificates = await Certificate.find(); // Get projects for the authenticated user
        res.status(200).json(certificates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }  
}
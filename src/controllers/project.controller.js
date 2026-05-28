import Project from '../models/projects.model.js';
import { logger } from '../utils/logger.js';


export const createProject = async (req, res) => {
    try {
        const { name, description, url, type } = req.body;
        
        // If a file was uploaded, multer puts it in req.file
        // We get the path so we can save it to the database
        const imagePath = req.file ? req.file.path : null;

        const newProject = new Project({
            user: req.user.id, // From your verifyToken middleware
            name,
            description,
            url,
            type,
            img: imagePath
        });

        await newProject.save();
        logger.info(`Project created successfully: ${newProject.name}, User ID: ${req.user.id}`);
        res.status(201).json(newProject);
        
    } catch (error) {
        logger.error(`Error creating project: ${error.message}, User ID: ${req.user.id}`);
        res.status(500).json({ error: error.message });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find(); // Get projects for the authenticated user
        res.status(200).json(projects);
    } catch (error) {
        logger.error(`Error fetching projects: ${error.message}`);
        res.status(500).json({ error: error.message });
    }  
};
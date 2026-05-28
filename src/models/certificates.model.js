import mongoose from "mongoose";

const certificatesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    description: { 
        type: String, 
        required: true, 
        trim: true 
    },
    issuer: { // Changed from 'enterprise' for industry standard
        type: String, 
        required: true, 
        trim: true 
    },
    issueDate: { // Let's employers know when you earned it
        type: Date,
        required: true 
    },
    credentialUrl: { // Link to verify the certificate (Coursera, Credly, etc.)
        type: String,
        required: false, // Set to false because some certs are just PDFs
        trim: true
    },
    img: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Fixed the export to create a 'Certificate' model!
export default mongoose.model('Certificate', certificatesSchema);
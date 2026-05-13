import mongoose from "mongoose";

const connectBd = async () => {

    try {
            await mongoose.connect(process.env.MONGO_DB_URI)
            console.log("conectado")
    } catch (error) {
        console.log("Fallo al conectar manito")        
    }

}

export default connectBd
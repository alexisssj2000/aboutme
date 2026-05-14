
import app from "./app.js"
import connecBd from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()

connecBd()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor levanta en puerto http://localhost:${PORT}`)
})

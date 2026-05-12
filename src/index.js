import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Respuesta exitosa')
} )

const PORT = 3000

app.listen(PORT, () => {
    console.log('Servidor levanta en puerto' + PORT)
})

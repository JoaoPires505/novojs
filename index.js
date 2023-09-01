const express = require('express')
const { funcionar } = require('./funcao')

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exercicio2', (req, res) => {
    const result = funcionar(req.body.valorhora, req.body.qtndhora)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})
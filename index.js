const express = require('express')
const { funcionar, mediaPesos } = require('./funcao')

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/FUP2', (req, res) => {
    const result = funcionar(req.body.valorhora, req.body.qtndhora)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/FUP3', (req, res) => {
    const pesos = mediaPesos(req.body.pesos)
    res.status(200).json({
        media: `${pesos}`
    })
    
}
)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
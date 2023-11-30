const express = require('express')
const app = express()
const PORT = 3001

app.get('*', (req, res, next) => {
    console.log('url =' + req.url)//логим в консоль все урлы запрошенные
    next()//нужен для продолжения работы иначе просто остановится
})

//получить
// app.get('/api/get', (req, res) => {
//     res.send('GET /' + users.toString())
// })

app.listen(PORT, ()=>{
    console.log('Server started on port = ' + PORT)
})
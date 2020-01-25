const express = require('express')
const app = express()
const PORT = 7001
const { fizzy } = require('./fizzy.js')
const morgan =  require('morgan')

app.use(morgan('dev'))
app.get('/:id', (req, res) => {
  res.send(fizzy(req.params.id))
})

// app.get('/:id', (req, res)=>{
//   console.log(req.params.id)
//   fizzy(req.params.id), (err, data) => {
//     if (err) return next(err)
//     res.setStatus(200).send(data)
//   }
// })

app.use((req, res, next) => {
  res.sendStatus(404)
})

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500).send(err.stack)
})

app.listen(PORT, ()=>{
  console.log(`Server is now listening on Port ${PORT}`)
})

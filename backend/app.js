const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const { startDatabase } = require('./db/mongo')
const { insertUser, getAllUsers } = require('./db/users')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type, Authorization'
    )
    next()
})

app.use('/api/users/', require('./routes/api/users'))

app.get('/', async (req, res) => {
    res.send(await getAllUsers())
})

startDatabase().then(async () => {
    app.listen(port, () => {
        console.log('Backend server started at port 3000')
    })
})

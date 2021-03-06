const express = require('express')
const cors = require('cors')

const { PORT = 8000 } = process.env

const app = express()
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})

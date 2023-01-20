const app = require('express')()

app.get('/', (req, res) => {
    res.send("Welcome to the abyss this my land")
})

app.listen(8000, () => {
    console.log('Serber berjalan pada port 8000')
})
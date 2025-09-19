const express = require('express')
const app = express()
const port = 3000
const name = "Duong Sereyvuth"
const group = "SV11.12"

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server NodeJS is running!' + "<br>"
        + "I'm " + name + "<br>" +
         " from group " + group)
})

app.get('/api', (req, res) => {
    const name = req.params.name || "Welcome to API"
    res.send(`Hello ${name}`)
})

app.post('/add', (req, res) => {
    const {name, gender, age, position} = req.body
    res.json({
        message: "User added successfully",
        data: {name, gender, age, position}
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        message: `User id:${id} has deleted successfully!`
    })
})

app.listen(port, () => {
    console.log(`Express started on port 3000`)
})
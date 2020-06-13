const express = require("express")
const routes = new express.Router()

let db = []

routes.post('/', async (req, res) => {
    let body = await req.body

    db.push(body)
    
    return res.json({ message: "create success" })
})

routes.get('/', async (req, res) => {
    const body = await db

    if (!body.length) {
        return res.json({ message: "without data" })
    }

    return res.json(body)
})

module.exports = routes

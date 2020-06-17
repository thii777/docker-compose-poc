const express = require("express")

import UsersController from "./app/controllers/UsersController"

const routes = new express.Router()

routes.post('/', UsersController.create)

routes.get('/', UsersController.getAll)

export default new routes

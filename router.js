const express = require("express")

const router = new express.Router()

const userController = require('./controllers/userController')

router.get("/view-users",userController.getUserController)

router.post("/add-user",userController.addUserController)

router.put("/edit-user",userController.editUserController)

router.delete("/delete-user",userController.deleteUserController)

module.exports = router
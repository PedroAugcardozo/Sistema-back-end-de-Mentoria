import express from "express"

import {UserController} from "../controller/userController"

const router = express.Router()
const userController = new UserController()

router.post("/usuarios", userController.createUser);
router.get("/usuarios/:id", userController.getUser);
router.get("/enderecos/:id", userController.getEndereco);
router.put("/usuarios/:id", userController.UpdateUser);

export default router();
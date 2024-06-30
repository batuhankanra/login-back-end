import express from "express"
import { checkSchema } from "express-validator"



import { registerController } from "../controllers/register.controller.mjs"
import {loginController} from "../controllers/login.controller.mjs"
import { authMiddleWare } from "../middleware/authmiddlewera.mjs"
import { logoutController } from "../controllers/logout.controllers.mjs"
import { createValidationSchema, loginValidationSchema } from "../utils/validationSchema.mjs"

export const routes = express.Router()



routes.post("/register",checkSchema(createValidationSchema),registerController)
routes.post('/login',checkSchema(loginValidationSchema) ,loginController)
routes.post('/logout',authMiddleWare,logoutController)

import Router from 'express'
import AuthController from '../controllers/authController.js'
import { loginValidation, registerValidation } from '../utils/validators/auth-validator.js'
import { validationHandler } from '../middlewares/validateMiddleware.js'

const authRouter = new Router()

authRouter.post('/register', registerValidation, validationHandler, AuthController.register)
authRouter.post('/login', loginValidation, validationHandler, AuthController.login)
authRouter.post('/logout', AuthController.logout)

export default authRouter

import Router from 'express'
import UserController from '../controllers/userController.js'

const userRouter = new Router()

userRouter.get('/all', UserController.getUsers)

export default userRouter

import Router from 'express'
import ListController from '../controllers/listController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import TaskController from '../controllers/taskController.js'

const taskRouter = new Router()

taskRouter.post( '/create', authMiddleware, TaskController.createTask )
taskRouter.put( '/update', authMiddleware, TaskController.updateTaskById )
taskRouter.delete( '/delete', authMiddleware, TaskController.deleteTaskById )

export default taskRouter
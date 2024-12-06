import Router from 'express'
import ListController from '../controllers/listController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const listRouter = new Router()

listRouter.post( '/create', authMiddleware, ListController.crateList )
listRouter.get( '/all', authMiddleware, ListController.getLists )
listRouter.get( '/:id', authMiddleware, ListController.getListById )
listRouter.put( '/update', authMiddleware, ListController.updateListById )
listRouter.delete( '/:id', authMiddleware, ListController.deleteListById )

export default listRouter
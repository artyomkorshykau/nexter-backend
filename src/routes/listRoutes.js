import Router from 'express'
import ListController from '../controllers/listController.js'

const listRoutes = new Router()

listRoutes.post( '/create-list', ListController.crateList )
listRoutes.get( '/lists', ListController.getLists )
listRoutes.get( '/list/:id', ListController.getListById )
listRoutes.put( '/list', ListController.updateListById )
listRoutes.delete( '/list/:id', ListController.deleteListById )

export default listRoutes
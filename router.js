import Router from 'express'
import ListController from './list.controller.js'

const router = new Router()

router.post( '/create-list', ListController.crateList )
router.get( '/lists', ListController.getLists )
router.get( '/list/:id', ListController.getListById )
router.put( '/list', ListController.updateListById )
router.delete( '/list/:id', ListController.deleteListById )

export default router
import ListService from '../services/listService.js'
import AuthErrorHandler from '../exceptions/authErrorHandler.js'
import ListErrorHandler from '../exceptions/listErrorHandler.js'

class ListController {
  
  async crateList( req, res, next ) {
    
    try {
      const { title } = req.body
      const list = await ListService.crateList( title )
      
      return res.status( 200 ).json( list )
      
    } catch ( error ) {
      next( error )
    }
    
  }
  
  async getLists( req, res, next ) {
    
    try {
      const lists = await ListService.getLists()
      return res.status( 200 ).json( lists )
      
    } catch ( error ) {
      next( error )
    }
    
  }
  
  async getListById( req, res, next ) {
    
    try {
      const { id } = req.params
      const listById = await ListService.getListById( id )
      return res.status( 200 ).json( listById )
      
    } catch ( error ) {
      next( error )
    }
    
  }
  
  async updateListById( req, res, next ) {
    
    try {
      const list = req.body
      const updatedList = await ListService.updateListById( list._id, list )
      return res.status( 200 ).json( updatedList )
      
    } catch ( error ) {
      next( error )
    }
    
  }
  
  async deleteListById( req, res, next ) {
    
    try {
      const { id } = req.params
      const deletedList = await ListService.deleteListById( id )
      return res.status( 200 ).json( deletedList )
      
    } catch ( error ) {
      next( error )
    }
    
  }
  
}

export default new ListController()

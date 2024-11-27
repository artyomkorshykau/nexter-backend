import ListService from '../services/listService.js'

class ListController {
  
  async crateList( req, res ) {
    
    try {
      
      const { title } = req.body
      const list = await ListService.crateList( title )
      return res.status( 200 ).json( list )
      
      
    } catch ( error ) {
      
      
      res.status( 500 ).json( error.message )
    }
    
  }
  
  async getLists( req, res ) {
    
    try {
      
      const lists = await ListService.getLists()
      return res.status( 200 ).json( lists )
      
    } catch ( error ) {
      
      res.status( 500 ).json( error.message )
      
    }
    
  }
  
  async getListById( req, res ) {
    
    try {
      
      const listById = await ListService.getListById( req.params.id )
      return res.status( 200 ).json( listById )
      
    } catch ( error ) {
      
      res.status( 500 ).json( error.message )
      
    }
    
  }
  
  async updateListById( req, res ) {
    
    try {
      
      const list = req.body
      
      const updatedList = await ListService.updateListById( list._id, list )
      return res.status( 200 ).json( updatedList )
      
    } catch ( error ) {
      
      res.status( 500 ).json( error.message )
      
    }
    
  }
  
  async deleteListById( req, res ) {
    
    try {
      
      const { id } = req.params
      
      const deletedList = await ListService.deleteListById( id )
      return res.status( 200 ).json( deletedList )
      
    } catch ( error ) {
      
      res.status( 500 ).json( error.message )
      
    }
    
  }
  
}

export default new ListController()

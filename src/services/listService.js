import List from '../models/List.js'
import ListErrorHandler from '../exceptions/listErrorHandler.js'

class ListService {
  
  async crateList( title ) {
    
    if ( title.trim().length === 0 ) throw ListErrorHandler.EmptyTitle()
    
    return await List.create( { title } )
    
  }
  
  async getLists() {
    
    return List.find()
    
  }
  
  async getListById( id ) {
    
    return List.findById( id )
    
  }
  
  async updateListById( id, list ) {
    
    return List.findByIdAndUpdate( id, list, { new: true } )
    
  }
  
  async deleteListById( id ) {
    
    return List.findByIdAndDelete( id )
    
  }
}

export default new ListService()
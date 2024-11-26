import List from './list.schema.js'

class ListService {
  
  async crateList( title ) {
    
    return await List.create( { title } )
    
  }
  
  async getLists() {
    
    return List.find()
    
  }
  
  async getListById( id ) {
    
    if ( !id ) {
      
      throw new Error( 'ID not specified' )
      
    }
    
    return List.findById( id )
    
    
  }
  
  async updateListById( id, list ) {
    
    if ( !id ) {
      
      throw new Error( 'ID not specified' )
      
    }
    
    return List.findByIdAndUpdate( id, list, { new: true } )
    
  }
  
  async deleteListById( id ) {
    
    if ( !id ) {
      
      throw new Error( 'ID not specified' )
      
    }
    
    return List.findByIdAndDelete( id )
    
  }
}

export default new ListService()
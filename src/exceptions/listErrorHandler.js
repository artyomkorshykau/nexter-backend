class ListErrorHandler extends Error {
  
  status
  errors
  
  constructor( status, errors = [], message ) {
    
    super( message )
    
    this.status = status
    this.errors = errors
    
  }
  
  static EmptyTitle() {
    return new ListErrorHandler( 401, [], 'Название не может быть пустым.' )
  }
  
  
}

export default ListErrorHandler
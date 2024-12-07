import UserService from '../services/userService.js'

class UserController {
  
  async getUsers( req, res, next ) {
    
    try {
      
      const users = await UserService.getAllUsers()
      
      return res.status( 200 ).json( users )
      
    } catch ( error ) {
      
      next( error )
      
    }
    
  }
  
}

export default new UserController()
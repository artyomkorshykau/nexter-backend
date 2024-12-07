import User from '../models/User.js'

class UserService {
  
  async getAllUsers() {
    
    return User.find()
    
  }
  
}

export default new UserService()
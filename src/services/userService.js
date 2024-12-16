import User from '../database/models/User.js'

class UserService {
  async getAllUsers() {
    return User.find()
  }
}

export default new UserService()

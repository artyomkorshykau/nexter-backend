import List from '../models/List.js'
import ListErrorHandler from '../exceptions/listErrorHandler.js'

class ListService {
  async createList(userID, title) {
    if (title.trim().length === 0) throw ListErrorHandler.EmptyTitle()

    return await List.create({ userID, title })
  }

  async getLists(userID) {
    return List.find({ userID }).populate('tasks')
  }

  async getListById(userID, id) {
    return List.findById(userID, id)
  }

  async updateListById(userID, id, list) {
    return List.findByIdAndUpdate(userID, id, list, { new: true })
  }

  async deleteListById(userID, id) {
    return List.findByIdAndDelete(userID, id)
  }
}

export default new ListService()

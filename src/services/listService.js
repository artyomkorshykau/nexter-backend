import ListErrorHandler from '../exceptions/listErrorHandler.js'
import List from '../database/models/List.js'
import mongoose from 'mongoose'

class ListService {
  async createList(userID, title) {
    if (title.trim().length === 0) throw ListErrorHandler.EmptyTitle()

    return await List.create({ userID, title })
  }

  async getLists(userID) {
    return await List.find({ userID }).populate('tasks')
  }

  async getListById(userID, listID) {
    if (!mongoose.Types.ObjectId.isValid(listID)) throw ListErrorHandler.ListNotFound()
    return await List.findOne({ userID, _id: listID })
  }

  async updateListById(userID, listID, list) {
    if (!mongoose.Types.ObjectId.isValid(listID)) throw ListErrorHandler.ListNotFound()
    return await List.findOneAndUpdate({ userID, _id: listID }, list, { new: true })
  }

  async deleteListById(userID, listID) {
    if (!mongoose.Types.ObjectId.isValid(listID)) throw ListErrorHandler.ListNotFound()
    return await List.findOneAndDelete({ userID, _id: listID })
  }
}

export default new ListService()

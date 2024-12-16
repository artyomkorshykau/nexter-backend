import ListErrorHandler from '../exceptions/listErrorHandler.js'
import Task from '../database/models/Task.js'
import List from '../database/models/List.js'
import mongoose from 'mongoose'

class TaskService {
  async createTask(userID, listID, title) {
    if (title.trim().length === 0) throw ListErrorHandler.EmptyTitle()
    const newTask = await Task.create({ userID, listID, title })
    return await List.findByIdAndUpdate(listID, { $push: { tasks: newTask._id } }, { new: true })
  }

  async updateTaskById(updateTask) {
    if (!mongoose.Types.ObjectId.isValid(updateTask.listID)) throw ListErrorHandler.ListNotFound()
    if (updateTask.title.trim().length === 0) throw ListErrorHandler.EmptyTitle()

    await Task.findOneAndUpdate(
      { _id: updateTask._id, listID: updateTask.listID },
      { title: updateTask.title },
      { new: true },
    )
  }

  async deleteTaskById(userID, listID, taskID) {
    console.log(listID)
    await Task.findOneAndDelete({ _id: taskID, listID })
    await List.findByIdAndUpdate(listID, { $pull: { tasks: taskID } })
  }
}

export default new TaskService()

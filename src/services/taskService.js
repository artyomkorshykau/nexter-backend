import ListErrorHandler from '../exceptions/listErrorHandler.js'
import Task from '../models/Task.js'
import List from '../models/List.js'

class TaskService {
  
  async createTask( userID, listID, title ) {
    
    if ( title.trim().length === 0 ) throw ListErrorHandler.EmptyTitle()
    
    const newTask = await Task.create( { userID, listID, title } )
    
    return await List.findByIdAndUpdate(
      listID,
      { $push: { tasks: newTask._id } },
      { new: true }
    )
    
  }
  
  async updateTaskById( updateTask ) {
    
    
    await Task.findOneAndUpdate(
      { _id: updateTask._id, listID: updateTask.listID },
      { title: updateTask.title },
      { new: true }
    )
    
  }
  
  async deleteTaskById( userID, listID, _id ) {
    
    await Task.findOneAndDelete( { _id, listID } )
    await List.findByIdAndUpdate( listID, { $pull: { tasks: _id } } )
    
  }
  
}

export default new TaskService()
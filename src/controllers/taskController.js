import { extractUserIdFromToken } from '../utils/helpers/extractUserIdFromToken.js'
import TaskService from '../services/taskService.js'

class TaskController {
  async createTask(req, res, next) {
    try {
      const { listID, title } = req.body
      const { accessToken } = req.cookies
      const userID = extractUserIdFromToken(accessToken)
      await TaskService.createTask(userID, listID, title)

      return res.status(200).json({ success: true })
    } catch (error) {
      next(error)
    }
  }

  async updateTaskById(req, res, next) {
    try {
      const updateTask = req.body
      await TaskService.updateTaskById(updateTask)

      return res.status(200).json({ success: true })
    } catch (error) {
      next(error)
    }
  }

  async deleteTaskById(req, res, next) {
    try {
      const { listID, taskID } = req.params
      console.log(listID, taskID)
      const { accessToken } = req.cookies
      const userID = extractUserIdFromToken(accessToken)
      await TaskService.deleteTaskById(userID, listID, taskID)

      return res.status(200).json({ success: true })
    } catch (error) {
      next(error)
    }
  }
}

export default new TaskController()

import { extractUserIdFromToken } from '../utils/helpers/extractUserIdFromToken.js'
import ListService from '../services/listService.js'

class ListController {
  async crateList(req, res, next) {
    try {
      const { title } = req.body
      const { accessToken } = req.cookies
      const userID = extractUserIdFromToken(accessToken)
      const list = await ListService.createList(userID, title)

      return res.status(200).json(list)
    } catch (error) {
      next(error)
    }
  }

  async getLists(req, res, next) {
    try {
      const { accessToken } = req.cookies
      const userID = extractUserIdFromToken(accessToken)
      const lists = await ListService.getLists(userID)
      return res.status(200).json(lists)
    } catch (error) {
      next(error)
    }
  }

  async getListById(req, res, next) {
    try {
      const { id } = req.params
      const { accessToken } = req.cookies
      const userID = extractUserIdFromToken(accessToken)
      const listById = await ListService.getListById(userID, id)
      return res.status(200).json(listById)
    } catch (error) {
      next(error)
    }
  }

  async updateListById(req, res, next) {
    try {
      const list = req.body
      const { accessToken } = req.cookies
      const userID = extractUserIdFromToken(accessToken)
      const updatedList = await ListService.updateListById(userID, list._id, list)
      return res.status(200).json(updatedList)
    } catch (error) {
      next(error)
    }
  }

  async deleteListById(req, res, next) {
    try {
      const { id } = req.params
      const { accessToken } = req.cookies
      const userID = extractUserIdFromToken(accessToken)
      const deletedList = await ListService.deleteListById(userID, id)
      return res.status(200).json(deletedList)
    } catch (error) {
      next(error)
    }
  }
}

export default new ListController()

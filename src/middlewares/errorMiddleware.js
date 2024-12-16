import AuthErrorHandler from '../exceptions/authErrorHandler.js'
import ListErrorHandler from '../exceptions/listErrorHandler.js'

export function errorMiddleware(error, req, res, next) {
  console.log(error)
  if (error instanceof AuthErrorHandler || error instanceof ListErrorHandler) {
    return res.status(error.status).json({ success: false, message: error.message })
  }

  return res.status(500).json({
    success: false,
    message: 'Внутренняя ошибка сервера',
  })
}

import AuthErrorHandler from '../exceptions/authErrorHandler.js'

export function errorMiddleware( error, req, res, next ) {
  
  if ( error instanceof AuthErrorHandler ) {
    return res.status( error.status ).json( { success: false, errors: error.errors, message: error.message } )
  }
  
  return res.status( 500 ).json( {
    success: false, message: 'Внутренняя ошибка сервера'
  } )
  
}

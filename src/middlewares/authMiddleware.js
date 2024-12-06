import jwt from 'jsonwebtoken'
import AuthErrorHandler from '../exceptions/authErrorHandler.js'

const authMiddleware = ( req, res, next ) => {
  
  try {
    
    const { accessToken } = req.cookies
    if ( !accessToken ) throw AuthErrorHandler.Unauthorized()
    req.user = jwt.verify( accessToken, process.env.JWT_ACCESS_SECRET )
    next()
    
  } catch ( error ) {
    next( error )
  }
  
}

export default authMiddleware

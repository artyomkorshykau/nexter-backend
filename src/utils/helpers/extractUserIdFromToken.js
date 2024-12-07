import AuthErrorHandler from '../../exceptions/authErrorHandler.js'
import jwt from 'jsonwebtoken'

export function extractUserIdFromToken( accessToken ) {
  
  if ( !accessToken ) throw AuthErrorHandler.Unauthorized()
  
  try {
    
    const decoded = jwt.verify( accessToken, process.env.JWT_ACCESS_SECRET )
    return decoded.userID
    
  } catch ( error ) {
    
    throw AuthErrorHandler.InvalidToken()
    
  }
  
}
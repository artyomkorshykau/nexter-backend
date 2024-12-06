import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import AuthErrorHandler from '../exceptions/authErrorHandler.js'
import TokenService from './tokenService.js'

class AuthService {
  
  async register( username, password ) {
    
    const isUserExist = await User.findOne( { username } )
    if ( isUserExist ) throw AuthErrorHandler.UserExist( username )
    
    const hashPassword = bcrypt.hashSync( password, 7 )
    const newUser = new User( { username, password: hashPassword } )
    await newUser.save()
    
    const token = TokenService.generateAccessToken( username )
    await TokenService.saveToken( newUser._id, token )
    
    return token
    
  }
  
  async login( username, password, accessToken ) {
    
    const isExistToken = await TokenService.existToken( accessToken )
    if ( isExistToken ) throw AuthErrorHandler.Authorized()
    
    const findUser = await User.findOne( { username } )
    if ( !findUser ) throw AuthErrorHandler.UserNotFound( username )
    
    const validatePassword = bcrypt.compareSync( password, findUser.password )
    if ( !validatePassword ) throw AuthErrorHandler.IncorrectPassword()
    
    const token = TokenService.generateAccessToken( username )
    await TokenService.saveToken( findUser._id, token )
    
    return token
    
  }
  
  async logout( accessToken ) {
    
    await TokenService.removeToken( accessToken )
    
  }
  
}

export default new AuthService()
import jwt from 'jsonwebtoken'
import Token from '../models/Token.js'

class TokenService {
  generateAccessToken(userID) {
    const payload = { userID }

    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30d' })
  }

  async saveToken(userID, accessToken) {
    await Token.create({ user: userID, accessToken })
  }

  async removeToken(accessToken) {
    await Token.deleteOne({ accessToken })
  }

  async existToken(accessToken) {
    return await Token.findOne({ accessToken })
  }
}

export default new TokenService()

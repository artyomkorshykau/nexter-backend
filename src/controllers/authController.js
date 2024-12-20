import AuthService from '../services/authService.js'

class AuthController {
  async register(req, res, next) {
    try {
      const { username, password } = req.body
      const token = await AuthService.register(username, password)
      const lifeTime = 30 * 24 * 60 * 60 * 1000
      res.cookie('accessToken', token, {
        maxAge: lifeTime,
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      })

      return res.status(200).json({ success: true, token })
    } catch (err) {
      next(err)
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body
      const { accessToken } = req.cookies

      const token = await AuthService.login(username, password, accessToken)
      const lifeTime = 30 * 24 * 60 * 60 * 1000
      res.cookie('accessToken', token, {
        maxAge: lifeTime,
        httpOnly: true,
        secure: false,
        sameSite: 'none',
      })

      return res.status(200).json({ success: true, token })
    } catch (err) {
      next(err)
    }
  }

  async logout(req, res, next) {
    try {
      const { accessToken } = req.cookies
      await AuthService.logout(accessToken)
      res.clearCookie('accessToken')

      return res.status(200).end()
    } catch (err) {
      next(err)
    }
  }
}

export default new AuthController()

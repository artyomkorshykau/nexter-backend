class AuthErrorHandler extends Error {
  status
  errors

  constructor(status, errors = [], message) {
    super(message)

    this.status = status
    this.errors = errors
  }

  static Unauthorized() {
    return new AuthErrorHandler(401, [], 'Пользователь не авторизован')
  }

  static InvalidToken() {
    return new AuthErrorHandler(401, [], 'Неверный токен или просрочен')
  }

  static Authorized() {
    return new AuthErrorHandler(403, [], 'Пользователь авторизован')
  }

  static IncorrectPassword() {
    return new AuthErrorHandler(401, [], {
      password: 'Неверный пароль.',
    })
  }

  static UserExist(username) {
    const message = JSON.stringify({
      username: `Пользователь ${username} уже зарегистрирован.`,
    })
    return new AuthErrorHandler(400, [], message)
  }

  static UserNotFound(username) {
    const message = JSON.stringify({
      username: `Пользователь ${username} не найден.`,
    })
    return new AuthErrorHandler(400, [], message)
  }

  static BadRequest(message, errors = []) {
    return new AuthErrorHandler(400, errors, message)
  }
}

export default AuthErrorHandler

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
    return new AuthErrorHandler(401, [], 'Неверный пароль.')
  }

  static UserExist(username) {
    return new AuthErrorHandler(400, [], `Пользователь ${username} уже зарегистрирован.`)
  }

  static UserNotFound(username) {
    return new AuthErrorHandler(400, [], `Пользователь ${username} не найден.`)
  }

  static BadRequest(message, errors = []) {
    return new AuthErrorHandler(400, errors, message)
  }
}

export default AuthErrorHandler

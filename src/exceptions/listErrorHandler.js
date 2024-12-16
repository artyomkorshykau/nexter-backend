class ListErrorHandler extends Error {
  status
  errors

  constructor(status, errors = [], message) {
    super(message)

    this.status = status
    this.errors = errors
  }

  static EmptyTitle() {
    return new ListErrorHandler(400, [], 'Название не может быть пустым.')
  }

  static ListNotFound() {
    return new ListErrorHandler(403, [], 'Список не найден.')
  }

  static UserNotFound() {
    return new ListErrorHandler(403, [], 'Пользователь не найден.')
  }
}

export default ListErrorHandler

import { check } from 'express-validator'

export const registerValidation = [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть не меньше 3-х символов').isLength({ min: 3 }),
  check('password', 'Пароль должен быть не больше 10 символов').isLength({ max: 10 }),
]

export const loginValidation = [
  check('username', 'Введите имя пользователя').notEmpty(),
  check('password', 'Введите пароль').notEmpty(),
]

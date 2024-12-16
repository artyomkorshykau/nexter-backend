export const authDocs = {
  '/auth/register': {
    post: {
      summary: 'Регистрация нового пользователя',
      tags: ['Auth'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: { type: 'string' },
                password: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Пользователь успешно зарегистрирован',
          headers: {
            'Set-Cookie': {
              description: 'Токен доступа сохранён в куках',
              schema: {
                type: 'string',
              },
            },
          },
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean' },
                  token: { type: 'string' },
                },
              },
            },
          },
        },
        400: {
          description: 'Неверные данные',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  errors: {
                    type: 'object',
                    properties: {
                      username: {
                        type: 'string',
                        example: 'Имя пользователя не может быть пустым',
                      },
                      password: {
                        type: 'string',
                        example: 'Пароль должен быть не меньше 3-х символов',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/auth/login': {
    post: {
      summary: 'Вход в систему',
      tags: ['Auth'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: { type: 'string' },
                password: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          headers: {
            'Set-Cookie': {
              description: 'Токен доступа сохранён в куках',
              schema: {
                type: 'string',
              },
            },
          },
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean' },
                  token: { type: 'string' },
                },
              },
            },
          },
        },
        400: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: false },
                  message: {
                    type: 'string',
                    example: 'Пользователь не найден.',
                  },
                },
              },
            },
          },
        },
        403: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: false },
                  message: {
                    type: 'string',
                    example: 'Пользователь авторизован.',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/auth/logout': {
    get: {
      summary: 'Выход из системы',
      tags: ['Auth'],
      responses: {
        200: { description: 'Выход выполнен' },
      },
    },
  },
}

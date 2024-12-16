export const userDocs = {
  '/user/all': {
    get: {
      summary: 'Список пользователей',
      tags: ['User'],
      responses: {
        200: {
          description: 'Массив пользователей',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string' },
                    username: { type: 'string' },
                  },
                },
              },
            },
          },
        },
        401: {
          description: 'Не авторизованный',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean',
                    example: false,
                  },
                  message: {
                    type: 'string',
                    example: 'Пользователь не авторизован.',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

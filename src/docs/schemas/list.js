export const listDocs = {
  '/list/create': {
    post: {
      summary: 'Создание нового списка',
      tags: ['List'],
      security: [{ cookieAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['title'],
              properties: {
                title: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Список успешно создан',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  userID: { type: 'string' },
                  title: { type: 'string' },
                  tasks: { type: 'array', example: [] },
                  _id: { type: 'string' },
                },
              },
            },
          },
        },
        400: {
          description: 'Передача пустого названия',
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
                    example: 'Название не может быть пустым.',
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
  '/list/all': {
    get: {
      summary: 'Получение всех списков',
      tags: ['List'],
      security: [{ cookieAuth: [] }],
      responses: {
        200: {
          description: 'Все списки',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string' },
                    userID: { type: 'string' },
                    title: { type: 'string' },
                    tasks: { type: 'array', example: [] },
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
  '/list/{listID}': {
    get: {
      summary: 'Получение список по id',
      tags: ['List'],
      security: [{ cookieAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'ID списка',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Все списки',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  _id: { type: 'string' },
                  userID: { type: 'string' },
                  title: { type: 'string' },
                  tasks: { type: 'array', example: [] },
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
        403: {
          description: 'Некорректный ID',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: false },
                  message: { type: 'string', example: 'Список не найден.' },
                },
              },
            },
          },
        },
      },
    },
  },
  '/list/update': {
    put: {
      summary: 'Обновление списка',
      tags: ['List'],
      security: [{ cookieAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                userID: { type: 'string' },
                title: { type: 'string' },
                tasks: { type: 'array', example: [] },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Список успешно обновлён',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  _id: { type: 'string' },
                  userID: { type: 'string' },
                  title: { type: 'string' },
                  tasks: { type: 'array', example: [] },
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
        403: {
          description: 'Некорректный ID',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: false },
                  message: { type: 'string', example: 'Список не найден.' },
                },
              },
            },
          },
        },
      },
    },
  },
  '/list/delete/{listID}': {
    delete: {
      summary: 'Удаление списка',
      tags: ['List'],
      security: [{ cookieAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'ID списка',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Список успешно удалён',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  _id: { type: 'string' },
                  userID: { type: 'string' },
                  title: { type: 'string' },
                  tasks: { type: 'array', example: [] },
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
        403: {
          description: 'Некорректный ID',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: false },
                  message: { type: 'string', example: 'Список не найден.' },
                },
              },
            },
          },
        },
      },
    },
  },
}

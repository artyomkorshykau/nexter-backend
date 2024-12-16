export const taskDocs = {
  '/task/create': {
    post: {
      summary: 'Создание новой задачи',
      tags: ['Task'],
      security: [{ cookieAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['title'],
              properties: {
                listID: { type: 'string' },
                title: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Задача успешно создан',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
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
  '/task/update': {
    put: {
      summary: 'Обновление задачи',
      tags: ['Task'],
      security: [{ cookieAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                listID: { type: 'string' },
                title: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Задача успешно обновлена',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
                },
              },
            },
          },
        },
        400: {
          description: 'Передано пустое название',
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
  '/task/delete/{listID}/{taskID}': {
    delete: {
      summary: 'Удаление задачи',
      tags: ['Task'],
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
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'ID задачи',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Задача успешно удалена',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
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

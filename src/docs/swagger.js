import { authDocs } from './schemas/auth.js'
import { listDocs } from './schemas/list.js'
import { taskDocs } from './schemas/task.js'
import { userDocs } from './schemas/user.js'

const swaggerDocument = {
  openapi: '3.0.0',
  components: {
    securitySchemes: {
      cookieAuth: {
        type: 'apiKey',
        in: 'cookie',
        name: 'accessToken',
        description: 'JWT токен, передаваемый в куках для авторизации',
      },
    },
  },
  info: {
    title: 'Nexter API',
    version: '1.0.0',
    description: 'Документация для Nexter',
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
    },
  ],
  paths: {
    ...authDocs,
    ...listDocs,
    ...taskDocs,
    ...userDocs,
  },
}

export default swaggerDocument

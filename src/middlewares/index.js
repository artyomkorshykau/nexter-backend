import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import documentSwagger from '../../src/docs/swagger.js'
import swaggerUi from 'swagger-ui-express'

export const applyMiddlewares = app => {
  app.use(helmet())
  app.use(express.json())
  app.use(cookieParser())
  app.use(
    cors({
      origin: ['http://localhost:3000', 'https://nexter-todo.vercel.app'],
      credentials: true,
    }),
  )
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentSwagger))
}

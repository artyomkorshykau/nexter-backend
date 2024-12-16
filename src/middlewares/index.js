import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import documentSwagger from '../../src/docs/swagger.js'
import swaggerUi from 'swagger-ui-express'

export const applyMiddlewares = app => {
  app.use(helmet({ hidePoweredBy: { setTo: 'Spring' } }))
  app.use(express.json())
  app.use(cookieParser())
  app.use(cors())
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentSwagger))
}

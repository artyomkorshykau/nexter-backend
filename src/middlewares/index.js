import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import documentSwagger from '../../src/docs/swagger.js'
import swaggerUi from 'swagger-ui-express'

export const applyMiddlewares = app => {
  app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; frame-src 'self' https://vercel.live;",
    )
    next()
  })

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", 'https://vercel.live'],
          connectSrc: ["'self'", 'https://vercel.live'],
        },
      },
    }),
  )
  app.use(express.json())
  app.use(cookieParser())
  app.use(cors())
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentSwagger))
}

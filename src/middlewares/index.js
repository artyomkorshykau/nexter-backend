import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'

export const applyMiddlewares = app => {
  app.use(helmet())
  app.use(express.json())
  app.use(cookieParser())
  app.use(cors())
}

import express from 'express'
import config from './config.js'
import { applyMiddlewares } from './middlewares/index.js'
import { loadRoutes } from './routes/index.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import { connectDB } from './database/database.js'
import { logger } from './utils/logs/logger.js'

const app = express()

applyMiddlewares(app)
loadRoutes(app)

app.use(errorMiddleware)

const serverApp = async () => {
  try {
    await connectDB(config.dbUrl)

    app.listen(config.port, () => {
      logger.info(`Sever start on port: ${config.port}!`)
    })
  } catch (error) {
    logger.error('ERROR STARTING SERVER!!!')
  }
}

serverApp()

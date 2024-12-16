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

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running!' })
})

let isDBConnected = false

const connectToDB = async () => {
  if (!isDBConnected) {
    await connectDB(config.dbUrl)
    logger.info('Database connected successfully!')
    isDBConnected = true
  }
}

export default async function handler(req, res) {
  try {
    await connectToDB()
    return app(req, res)
  } catch (error) {
    logger.error('Server error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

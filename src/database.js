import { connect } from 'mongoose'
import { logger } from './utils/logs/logger.js'

export const connectDB = async dbUrl => {
  try {
    await connect(dbUrl)
    logger.info('MongoDB is connected!')
  } catch (error) {
    logger.error('MongoDB connection error:', error)
    throw new Error('Database connection failed')
  }
}

import listRouter from './listRoutes.js'
import taskRouter from './taskRoutes.js'
import authRouter from './authRoutes.js'
import userRouter from './userRoutes.js'

export const loadRoutes = app => {
  app.use('/api/list', listRouter)
  app.use('/api/task', taskRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/user', userRouter)
}

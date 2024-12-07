import express from 'express'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
import listRouter from './routes/listRoutes.js'
import authRouter from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import taskRouter from './routes/taskRoutes.js'

const app = express()

dotenv.config()

app.use( express.json() )
app.use( cookieParser() )
app.use( cors() )

app.use( '/api/list', listRouter )
app.use( '/api/task', taskRouter )
app.use( '/api/auth', authRouter )
app.use( '/api/user', userRouter )

app.use( errorMiddleware )

const serverApp = async() => {
  
  try {
    
    await connect( process.env.DB_URL )
      .then( () => 'MongoDB is connected!' )
      .catch( () => 'MongoDB connected error' )
    
    app.listen( process.env.PORT || 5000, () => {
      
      console.log( `--------- SERVER START ON PORT: ${ process.env.PORT } ---------` )
      
    } )
    
  } catch ( error ) {
    
    console.log( 'ERROR STARTING SERVER!!!' )
    
  }
  
}

serverApp()

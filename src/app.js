import express from 'express'
import mongoose from 'mongoose'
import listRoutes from './routes/listRoutes.js'

const app = express()

app.use( express.json() )
app.use( '/api', listRoutes )

async function server() {
  
  try {
    
    await mongoose.connect( process.env.DATABASE_URL )
    
    app.listen( process.env.PORT, () => {
      console.log( `Server will be starting on PORT: ${ process.env.PORT }` )
    } )
    
  } catch ( error ) {
    
    console.log( error )
    
  }
  
}

server()

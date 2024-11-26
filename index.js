import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000
const DATABASE_URL = 'mongodb+srv://butovichjunior:LBZD3XWDduOhSoUj@cluster0.lfpcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

app.use( express.json() )
app.use( '/api', router )

async function server() {
  
  try {
    
    await mongoose.connect( DATABASE_URL )
    
    app.listen( PORT, () => {
      console.log( `Server will be starting on PORT: ${ PORT }` )
    } )
    
  } catch ( error ) {
    
    console.log( error )
    
  }
  
}

server()

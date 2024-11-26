import mongoose from 'mongoose'

const ListSchema = new mongoose.Schema( {
  
  title: { type: String, required: true }
  
} )

export default mongoose.model( 'List', ListSchema )
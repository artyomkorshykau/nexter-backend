import mongoose from 'mongoose'

const List = new mongoose.Schema( {
  
  title: { type: String, required: true }
  
} )

export default mongoose.model( 'List', List )
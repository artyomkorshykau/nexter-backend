import { Schema } from 'mongoose'

export const Task = new Schema( {
  
  title: { type: String, required: true }
  
} )


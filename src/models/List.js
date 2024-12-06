import { Schema, model } from 'mongoose'
import { Task } from './Task.js'

const List = new Schema( {
  
  title: { type: String, required: true },
  tasks: [ Task ]
  
} )

export default model( 'List', List )
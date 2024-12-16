import { Schema, model } from 'mongoose'

const Task = new Schema({
  userID: { type: String, required: true },
  listID: { type: String, required: true },
  title: { type: String, required: true },
})

Task.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v
    return ret
  },
})

export default model('Task', Task)

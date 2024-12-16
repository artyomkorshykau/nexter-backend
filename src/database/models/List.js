import { Schema, model, Types } from 'mongoose'

const List = new Schema({
  userID: { type: String, require: true },
  title: { type: String, required: true },
  tasks: [{ type: Types.ObjectId, ref: 'Task' }],
})

List.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v
    return ret
  },
})

export default model('List', List)

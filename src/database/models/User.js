import { Schema, model } from 'mongoose'

const User = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

User.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v
    delete ret.password
    return ret
  },
})

export default model('User', User)

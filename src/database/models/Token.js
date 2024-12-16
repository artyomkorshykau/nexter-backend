import { Schema, model } from 'mongoose'

const Token = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  accessToken: { type: String, required: true },
})

export default model('Token', Token)

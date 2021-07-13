import mongoose from 'mongoose'

const formdata113Schema = mongoose.Schema({
  department: { type: String },
  progCode: { type: Number  },
  progName: { type: String},
  introYear:{type:String},
  activities:{type:String},
  yearcbcs:{type:String},
  intro:{type:String},
})

export default mongoose.model('FormData113', formdata113Schema)
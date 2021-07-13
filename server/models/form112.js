import mongoose from 'mongoose'

const formdata112Schema = mongoose.Schema({
  department: { type: String },
  progCode: { type: Number  },
  progName: { type: String},
  introYear:{type:String},
  cbcs:{type:String},
  yearcbcs:{type:String},
  yearRev:{type:String},
  RevPercent:{type:Number},

})

export default mongoose.model('FormData112', formdata112Schema)
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
  content: {
    type: String
  },
  rating: {
    type: Number
  }
})

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  photo: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  keywords: {
    type: [String],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactNumber: {
    type : Number 
  },
  availability: {
    type: Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  reviews: [reviewSchema]
},{
  timestamps: true,
})

const Doctor = mongoose.model('Doctor', doctorSchema)

export {Doctor}
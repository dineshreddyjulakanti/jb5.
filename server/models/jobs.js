const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobPostingSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // it is the some foregin 
    ref: 'notes'
 },
  JobTitle: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  minPrice: {
    type: String,
    required: true
  },
  maxPrice: {
    type: String,
    required: true
  },
  salaryType: {
    type: String,
    required: true,
    // enum: ['Hourly', 'Salary'] // Assuming these are the only two types
  },
  jobLocation: {
    type: String,
    required: true
  },
  postingDate: {
    type: Date,
    required: true
  },
  experienceLevel: {
    type: String,
    required: true,
    // enum: ['NoExperience', 'Junior', 'MidLevel', 'Senior'] // Adjust according to actual levels
  },
  companyLogo: {
    type: String, // URL to the image
  },
  employmentType: {
    type: String,
    required: true,
    // enum: ['Full-time', 'Part-time', 'Contract', 'Temporary'] // Assuming these are the options
  },
  description: {
    type: String,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  },
  skills: [{
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }],
  createAt: {
    type: Date,
    default: Date.now
  }
});
JobPostingSchema.index({ user: 1, postingDate: 1, JobTitle: 1 }, { unique: true });
module.exports = mongoose.model('Jobs', JobPostingSchema);

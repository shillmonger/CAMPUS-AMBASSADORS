import mongoose from 'mongoose';

const TeamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  linkedinUrl: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

TeamMemberSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.TeamMember || mongoose.model('TeamMember', TeamMemberSchema);

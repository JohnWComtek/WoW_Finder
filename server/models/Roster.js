const mongoose = require('mongoose');

const rosterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    enum: ['Raid', 'Mythic+', 'PvP', 'Social'],
    required: true,
  },
  members: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    character: {
      name: String,
      realm: String,
      class: String,
      role: String,
      spec: String,
    },
    role: {
      type: String,
      enum: ['tank', 'healer', 'dps'],
      required: true,
    },
    isBackup: {
      type: Boolean,
      default: false,
    },
  }],
  raidTimes: [{
    day: {
      type: String,
      enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    },
    startTime: String,
    endTime: String,
  }],
  requirements: {
    minLevel: Number,
    minRaiderIO: Number,
    minItemLevel: Number,
    description: String,
  },
  history: [{
    date: Date,
    activity: String,
    participants: [{
      character: String,
      role: String,
    }],
    notes: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
rosterSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Roster', rosterSchema); 
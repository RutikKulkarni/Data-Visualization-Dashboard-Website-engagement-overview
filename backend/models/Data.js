const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  id: { type: Number, required: true }, 
  date: { type: String, required: true },
  page_views: { type: Number, required: true },
  average_time_on_page: { type: Number, required: true },
  average_session_duration: { type: Number, required: true },
  pages_per_session: { type: Number, required: true },
  bounce_rate: { type: Number, required: true },
  traffic_sources: {
    direct: { type: Number, required: true },
    organic_search: { type: Number, required: true },
    referral: { type: Number, required: true },
    social: { type: Number, required: true }
  },
  social_referrals: {
    facebook: { type: Number, required: true },
    twitter: { type: Number, required: true },
    linkedin: { type: Number, required: true },
    other: { type: Number, required: true }
  },
  new_visitor_sessions: { type: Number, required: true }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;

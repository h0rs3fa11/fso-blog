const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

blogSchema.set('toJSON', {
  transform: (document, returnObject) => {
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    returnObject.id = returnObject._id.toString();
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    delete returnObject._id;
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    delete returnObject.__v;
  },
});

module.exports = mongoose.model('Blog', blogSchema);

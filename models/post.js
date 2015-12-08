/*
 * POST MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  author: String,
  body: String
});

var PostSchema = new Schema({
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },
    title: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    caption: { type: String, required: true, trim: true },
    img_url: String,
    comments: [CommentSchema]
   
});


// MIDDLEWARE
PostSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

CommentSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// export post model
var Post = mongoose.model('Post', PostSchema);

module.exports = Post;

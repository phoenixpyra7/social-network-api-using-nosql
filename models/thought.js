const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction.js");
const dateFormat = require("../utils/dateFormat.js");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal), 
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    reactions: [reactionSchema],
  },
  {
    //transform Objects after querying MongoDB to JSON
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
.virtual("reactionCount")
.get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema); 
module.exports = Thought;

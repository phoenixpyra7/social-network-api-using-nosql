const Thought = require("../models/Thought");

// use of multiple ways to code as to showcase ability to comprehend multiple formats. See User controller

// get all thoughts
const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get a single thought
const getSingleThought = async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId });
    if (!thought) {
      return res.status(404).json({ message: "No thought with that ID" });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// create a new thought
const createThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.create(req.body);
    res.json(dbThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update a thought
const updateThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    );
    if (!dbThoughtData) {
      return res.status(404).json({ message: "No thought with that ID" });
    }
    res.json(dbThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete a thought
const deleteThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findOneAndDelete({
      _id: req.params.thoughtId,
    });
    if (!dbThoughtData) {
      return res.status(404).json({ message: "No thought with that ID" });
    }
    res.json(dbThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// create a reaction for a thought
const createReaction = async (req, res) => {
  try {
    const dbReactionData = await Reaction.create(req.body);
    res.json(dbReactionData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete a reaction on a thought
const deleteReaction = async (req, res) => {
  try {
    const dbReactionData = await Reaction.findOneAndDelete({
      _id: req.params.reactionId,
    });
    if (!dbReactionData) {
      return res.status(404).json({ message: "No reaction with that ID" });
    }
    res.json(dbReactionData);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
};

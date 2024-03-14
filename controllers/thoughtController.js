const Thought = require("../models/Thought");
const Reaction = require("../models/Reaction");

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
const getThoughtById = async (req, res) => {
  // get single thought changed to getThoughtById
  try {
    const thought = await Thought.findById({ _id: req.params.thoughtId });
    if (!thought) {
      return res.status(404).json({ message: "No thought for that ID" });
    }
    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// create a new thought
const createThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.create(req.body);
    // const dbUserData = await User.findById(req.body.userId);
    //user.thoughts.push(thought._id);
    res.json({ message: "Thought created" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// update a thought
const updateThought = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true } 
    );
    if (!dbThoughtData) {
      return res.status(404).json({ message: "No thought for that ID" });
    }
    res.json({ message: "Thought updated" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete a thought
const deleteThought = async (req, res) => {  /// ASK CONNER ABOUT THIS ************
  try {
    const thought = await Thought.findByIdAndDelete(
      { _id: req.params.thoughtId },
      const user = await User.findById(req.body.userId);
      user.thoughts.pull(thought._id);
      await user.save();
    );
    // error code here if thought doesn't exist
    if (!dbThoughtData) {
      return res.status(404).json({ message: "No thought with that ID" });
    }
    // otherwise
    }
    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// create a reaction for a thought
const createReaction = async (req, res) => {
  try {
    const dbThoughtData = await Thought.findById(req.params.thoughtId); /// FINISH THURSDAY{_id: req.params.thoughtId}? mult like this
    dbThoughtData.reactions.push(reaction);
    //$addToSet: {reactions" req.body },
    await dbThoughtData.save();
    res.json({ message: 'Reaction added' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// delete a reaction on a thought
const deleteReaction = async (req, res) => {
  try {
      const dbThoughtData = await Thought.findById(req.params.thoughtId);
      dbThoughtData.reactions.pull(reaction); 
      //$pull: {reactions: {_id: req.params.reactionId }},
      await dbThoughtData.save();
      _id: req.params.reactionId, // I may have messed up the order of this line
    };
    if (!dbThoughtData) {
      return res.status(404).json({ message: "No reaction with that ID" });
    }
    res.json({ message: 'Reaction deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
};

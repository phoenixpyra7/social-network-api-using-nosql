const User = require("../models/User");

// use of multiple ways to code as to showcase ability to comprehend multiple formats. See thought controller

module.exports = {
  
 // get all users and populate their thoughts and friends--- do i want to show friends?
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("thoughts").populate("friends");
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getUserById(req, res) {
    try {
      const user = await User.findById({ _id: req.params.userId }).select(
        "-__v"// not sure about this
        //const user= await User.findById(req.params.userId).populate("thoughts").populate("friends");
      );
      // error code here if user doesn't exist
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // otherwise
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body); /// why grayed out?????
      res.json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update a user
  async updateUser(req, res) {
    try {
      const dbUserData = await User.findbyIdAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true }
      );
      // error code here if user doesn't exist
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // otherwise
      res.json({ message: 'Updated user successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete user
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findByIdAndDelete({
        _id: req.params.userId,
      });
      // error code here if user doesn't exist
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // otherwise
      Thought.deleteMany({ _id: { $in: dbUserData.thoughts } }); 
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  ;},

  // add a friend
  async addFriend(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } }, //friend or friends????
        { new: true }
      );
      // error code here if user/friend doesn't exist
      if (!dbUserData) {
        return res.status(404).json({ message: "No friends with that ID" });
      }
      // otherwise
      res.json({ message: 'Friend added successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // remove friend
  async removeFriend(req, res) {
    try {
      const dbUserData = await User.findById(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId }},
        { new: true }
         await user.save(), /// removed curly braces but still broken.*****
      );
      // error code here if user/friend doesn't exist
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      // otherwise
      res.json({ message: 'Friend removed successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

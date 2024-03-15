// const User = require("../../models/user");
const router = require("express").Router();

const {
  getUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");
// -- OUR ENDPOINTS -- //
// --> /api/users
// use of multiple ways to code as to showcase ability to comprehend multiple formats.
router
  .route("/")
  .get(getUsers) //Get all users
  .post(createUser); //create new user

// use of multiple ways to code as to showcase ability to comprehend multiple formats. *****should this be getUserById instead of single???
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser); //get single user, update user, delete user.

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend); // add friend, delete friend.

module.exports = router;

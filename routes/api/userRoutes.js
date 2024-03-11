// const User = require("../../models/user");
const router = require("express").Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require("../../controllers/userController");


// -- OUR ENDPOINTS -- //
// --> /api/users

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userid/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router
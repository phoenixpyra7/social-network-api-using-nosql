// const User = require("../../models/user");
const router = require("express").Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require("../../controllers/userController");

const {
    getUsers,
    getSingleUser,
    updateUser,
    createUser,
    deleteUser,
    addFriend,
    removeFriend

} = require('../../controllers/userController');
// -- OUR ENDPOINTS -- //
// --> /api/users
// use of multiple ways to code as to showcase ability to comprehend multiple formats.
router.route('/').get(getUsers).post(createUser); //Get all user, create new user

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser); //get single user, update user, delete user.

router.route('/:userid/friends/:friendId').post(addFriend).delete(removeFriend); // add friend, delete friend.

router.route('/:users/userId/friends/:friendId').post(addFriend).delete(removeFriend); //Correct place? apiinsert?


module.exports = router
const router = require("express").Router();
const {
  getFriends,
  getSingleFriend,
  createFriend,
  deleteFriend,
  addTask,
  removeTask,
} = require("../../controllers/friendController");
// use of multiple ways to code as to showcase ability to comprehend multiple formats.
// /api/students
router.route("/").get(getFriends).post(createFriend); //2 places?

// /api/students/:studentId
router.route("/:friendId").get(getSingleFriend).delete(deleteFriend);//should this be in 2 places?

// /api/students/:studentId/assignments
router.route("/:friendId/tasks").post(addTask); 

// /api/students/:studentId/assignments/:assignmentId
router.route("/:friendId/tasks/:friendId").delete(removeTask);

module.exports = router;

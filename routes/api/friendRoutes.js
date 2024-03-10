const router = require("express").Router();
const {
  getFriends,
  getSingleFriend,
  createFriend,
  deleteFriend,
  addTask,
  removeTask,
} = require("../../controllers/friendController");

// /api/students
router.route("/").get(getFriends).post(createFriend);

// /api/students/:studentId
router.route("/:friendId").get(getSingleFriend).delete(deleteFriend);

// /api/students/:studentId/assignments
router.route("/:friendId/tasks").post(addTask);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:friendId/tasks/:friendId").delete(removeTask);

module.exports = router;

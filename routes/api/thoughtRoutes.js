// const User = require("../../models/user");
const { Thought } = require("../../models");
const router = require("express").Router();

// -- OUR ENDPOINTS -- //
// --> /api/thoughts
// use of multiple ways to code as to showcase ability to comprehend multiple formats.
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router
  .route("/")
  .get(getThoughts) // Get all thoughts
  .post(createThought); // Create a new thought

router
  .route("/:thoughtId")
  .get(getSingleThought) // Get a single thought or getThoughtbyId??????***********
  .put(updateThought) // Update by ID
  .delete(deleteThought); // Delete by ID

router
  .route("/:thoughtId/reactions")
  .post(createReaction) // Create a reaction 
  .delete(deleteReaction); // Delete a reaction

module.exports = router;

/*
-- HTTP SERVER ROUTE METHODS -- //
router.get('/', (req, res) => {
    Thought.find()
        .then({

            res.json(thoughts)
        })
        .catch((err){ 
            res.json(err)
        })
})
*/

// --> /api/thoughts/:thoughtId/reactions

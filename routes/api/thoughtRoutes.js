// const User = require("../../models/user");
const { Thought } = require("../../models");
const router = require("express").Router();


// -- OUR ENDPOINTS -- //
// --> /api/thoughts

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


router.post()
*/


// --> /api/thoughts/:thoughtId/reactions
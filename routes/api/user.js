// const User = require("../../models/user");
const { User } = require("../../models");
const router = require("express").Router();


// -- OUR ENDPOINTS -- //
// --> /api/users

/*
-- HTTP SERVER ROUTE METHODS -- //
router.get('/', (req, res) => {
    User.find()   
})
    
    
router.get('/:id', (req, res) => {
    User.find({ where: req.params.id)   
    User.findById()
})


router.post('/', (req, res) => {

    
    User.create(req.body)
})
*/


// --> /api/users/:userId/friends/:friendId
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

function initRouters(app) {
    //post Members
    router.post('/members', userController.postMembers);

    //get members
    router.get("/members", userController.getAllMembers);
    router.get('/members/:id', userController.getMembersWithID);
    
    //put members
    router.put('/members/:id', userController.updateMembersWithID);

    //delete Members
    router.delete('/members/:id', userController.deleteMembersWithID);

    

    return router;
}





module.exports = initRouters;
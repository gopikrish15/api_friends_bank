const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const transactionController = require('../controllers/transactionController');

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



     //post Transaction
     router.post('/transactions', transactionController.postTransactions);

     //get Transaction
     router.get("/transactions", transactionController.getAllTransactions);
     router.get('/transactions/:id', transactionController.getTransactionsWithID);
     
     //put Transaction
     router.put('/transactions/:id', transactionController.updateTransactionsWithID);
 
     //delete Transaction
     router.delete('/transactions/:id', transactionController.deleteTransactionsWithID);

    

    return router;
}





module.exports = initRouters;
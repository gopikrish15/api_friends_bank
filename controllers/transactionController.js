const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactionModel');



router.get('/', (req, res) => {
    res.send('List of Transactions');
});

exports.getAllTransactions = async (req, res) => {
    try {
        let data = {}
        const transactions = await Transaction.find().skip(req.query.offset).limit(req.query.limit);
        const totalCount = await Transaction.countDocuments();
        const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);
        data.transactions = transactions
        data.totalCount = totalCount
        data.totalAmount = totalAmount;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getTransactionsWithID = async (req, res) => {
    try {
        const { id } = req.params
        const transaction = await Transaction.findById(id)
        res.status(200).json(transaction);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateTransactionsWithID = async (req, res) => {
    try {
        const { id } = req.params
        const transaction = await Transaction.findByIdAndUpdate(id, req.body)
        if (!transaction) {
            return res.status(404).json({ message: `cannot find any Transaction with ID ${id}` })
        }
        const updateProduct = await Transaction.findById(id)
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteTransactionsWithID = async (req, res) => {
    try {
        const { id } = req.params
        const transaction = await Transaction.findByIdAndRemove(id, req.body)
        res.status(200).json(transaction);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.postTransactions = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body)
        res.status(200).json(transaction);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}



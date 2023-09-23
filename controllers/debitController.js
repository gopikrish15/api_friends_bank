const express = require('express');
const router = express.Router();
const Debit = require('../models/debitModel');



router.get('/', (req, res) => {
    res.send('List of Debits');
});

exports.getAllDebits = async (req, res) => {
    try {
        let data = {}
        const debits = await Debit.find().skip(req.query.offset).limit(req.query.limit);
        const debit = await Debit.find()
        const totalCount = await Debit.countDocuments();
        const totalAmount = debit.reduce((total, debit) => total + debit.amount, 0);
        data.debits = debits
        data.totalCount = totalCount
        data.totalAmount = totalAmount;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getDebitsWithID = async (req, res) => {
    try {
        const { id } = req.params
        const debit = await Debit.findById(id)
        res.status(200).json(debit);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateDebitsWithID = async (req, res) => {
    try {
        const { id } = req.params
        const debit = await Debit.findByIdAndUpdate(id, req.body)
        if (!debit) {
            return res.status(404).json({ message: `cannot find any Debit with ID ${id}` })
        }
        const updateProduct = await Debit.findById(id)
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteDebitsWithID = async (req, res) => {
    try {
        const { id } = req.params
        const debit = await Debit.findByIdAndRemove(id, req.body)
        res.status(200).json(debit);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.postDebits = async (req, res) => {
    try {
        const debit = await Debit.create(req.body)
        res.status(200).json(debit);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}



const express = require('express');
const router = express.Router();
const Member = require('../models/memberModel');



router.get('/', (req, res) => {
    res.send('List of users');
});

exports.getAllMembers = async (req, res) => {
    try {
        let data = {}
        const members = await Member.find().skip(req.query.offset).limit(req.query.limit);
        const totalCount = await Member.countDocuments();
        data.members = members
        data.totalCount = totalCount
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getMembersWithID = async (req, res) => {
    try {
        const { id } = req.params
        const member = await Member.findById(id)
        res.status(200).json(member);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateMembersWithID = async (req, res) => {
    try {
        const { id } = req.params
        const member = await Member.findByIdAndUpdate(id, req.body)
        if (!member) {
            return res.status(404).json({ message: `cannot find any member with ID ${id}` })
        }
        const updateProduct = await Member.findById(id)
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteMembersWithID = async (req, res) => {
    try {
        const { id } = req.params
        const member = await Member.findByIdAndRemove(id, req.body)
        res.status(200).json(member);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.postMembers = async (req, res) => {
    try {
        const member = await Member.create(req.body)
        res.status(200).json(member);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}



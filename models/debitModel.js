const mongoose = require('mongoose');

const debitSchema = mongoose.Schema(
    {
        memberName: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
            
        },
        amount: {
            type: Number,
            required: true,
        },
        payment_method: {
            type: String,
            
        },
        payment_status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Debit = mongoose.model('Debit', debitSchema);

module.exports = Debit;
const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
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
        }
    },
    {
        timestamps: true,
    }
)

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
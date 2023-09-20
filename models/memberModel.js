const mongoose = require('mongoose');

const memberSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            
        },
        mobile: {
            type: Number,
            required: true,
            
        },
        address: {
            type: String,
            
        },
        plan: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
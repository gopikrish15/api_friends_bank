const mongoose = require('mongoose');

const memberSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "Please enter a first name"],
        },
        last_name: {
            type: String,
            required: true,
            default: 0,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
        },
        date_of_birth: {
            type: Date
        },
        plan: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
)

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
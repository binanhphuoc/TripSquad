const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SquadSchema = new Schema({
    icon: String, // Link
    bio: String,
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    privacy: {
        host: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        },
        public: Boolean,
        // 1: Manually accept request
		// 2: Automatically accept request with PIN
		// 3: Not allow request
        requestSetting: Number,
        PIN: String // Use this if requestSetting === 2
    },

    // NOTIFICATION
    // Squad-Notification may be One-to-Squillions,
    // Therefore, Squad Notifications is a separate Collection
    // SqNoti.js
    // SqNoti {
    //    squadID: ObjectID,
    //    content: Mixed
    // }

    // Squad-Schedule 
    schedule: [{
        type: Schema.Types.ObjectId,
        ref: 'SqSchedule'
    }],

    expense: [{
        type: Schema.Types.ObjectId,
        ref: 'SqExpense'
    }],
    photos: [{
        type: Schema.Types.ObjectId,
        ref: 'SqPhoto'
    }]
});

module.exports = mongoose.model('Squad', SquadSchema);
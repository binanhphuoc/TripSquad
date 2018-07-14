var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SqScheduleSchema = new Schema({
    squadID: {
        type: Schema.Types.ObjectId,
        ref: 'Squad'
    },
    time: Date,
    location: {
        name: String,
        address: String,
        long: Number,
        lat: Number,
    },
    description: String,
    link: String
});

module.exports = mongoose.model('SqSchedule', SqScheduleSchema);
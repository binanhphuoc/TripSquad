var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SqNotiSchema = new Schema({
    squadID: {
        type: Schema.Types.ObjectId,
        ref: 'Squad'
    },
    type: String,
    content: Schema.Types.Mixed,
    timeCreated: Date   // Time created of the notification
});

module.exports = mongoose.model('SqNoti', SqNotiSchema);
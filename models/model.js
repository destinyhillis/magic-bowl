const mongoose = require('mongoose');

const blueprintType = new mongoose.Schema ({
    name: {type: String, required},
    desc: {type: String},
    image: {type: String},
    ideas: {type: String}
});

const BlueprintType = mongoose.model('BlueprintType', blueprintType);

Module.exports = BlueprintType;
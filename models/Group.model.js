const { default : mongoose} = require("mongoose");

const groupSchema = mongoose.Schema ({
    nameGroup: String,
    weekStudy: Number,
    graduates: Boolean
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
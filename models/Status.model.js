const { default : mongoose} = require("mongoose");

const statusSchema = mongoose.Schema ({
    status: String,
});

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;
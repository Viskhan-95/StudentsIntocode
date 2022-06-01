const { default : mongoose} = require("mongoose");

const studentSchema = mongoose.Schema ({
    groupId: {
        ref: "Group",
        type: mongoose.SchemaTypes.ObjectId,
    },
    statusId: {
        ref: "Status",
        type: mongoose.SchemaTypes.ObjectId,
    },
    nameStudent: String,
    pay: String,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
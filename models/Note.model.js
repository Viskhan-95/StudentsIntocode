const { default : mongoose} = require("mongoose");

const noteSchema = mongoose.Schema ({
    studentId: {
        ref: "Student",
        type: mongoose.SchemaTypes.ObjectId
    },
    notes: String,
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
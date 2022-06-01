const Note = require("../models/Note.model");

module.exports.notesController = {
    getAllNoteById: async (req, res) => {
        try {
            const note = await Note.find({studentId: req.params.id});
            res.json(note);
        } catch (err) {res.json(err)}
    },
    addNote: async (req, res) => {
        try {
            const note = await Note.create({
                studentId: req.params.id,
                notes: req.body.notes
            });
            res.json(note);
        } catch (err) {res.json(err)}
    },
    delNote: async (req, res) => {
        try {
            await Note.findByIdAndRemove(req.params.id);
            res.json("Заметка удалена")
        } catch (err) {res.json(err)}
    },
    updateGroup: async (req, res) => {
        try {
            const note = await Note.findByIdAndUpdate(req.params.id, {
                studentId: req.params.id,
                notes: req.body.notes
            });
            res.json(note)
        } catch (err) {res.json(err)}
    }
}
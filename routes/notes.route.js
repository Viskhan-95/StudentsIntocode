const { Router } = require("express");
const { notesController } = require("../controllers/notes.controller")

const route = Router();

route.get('/student/note/:id', notesController.getAllNoteById);
route.post('/student/note/add/:id', notesController.addNote);
route.delete('/student/note/delete/:id', notesController.delNote);
route.patch('/student/note/update/:id', notesController.updateGroup);

module.exports = route;
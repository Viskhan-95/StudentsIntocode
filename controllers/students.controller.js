const Student = require("../models/Student.model");

module.exports.studentsController = {
    getAllStudents: async (req, res) => {
        try {
            const student = await Student.find();
            res.json(student);
        } catch (err) {res.json(err)}
    },
    getAllStudentsGroup: async (req, res) => {
        try {
            const student = await Student.find({droupId: req.params.id});
            res.json(student);
        } catch (err) {res.json(err)}
    },
    getFullyPayStudents: async (req, res) => {
        try {
            const student = await Student.find({pay: "fully"});
            res.json(student);
        } catch (err) {res.json(err)}
    },
    getNotFullyPayStudents: async (req, res) => {
        try {
            const student = await Student.find({pay: "not fully"});
            res.json(student);
        } catch (err) {res.json(err)}
    },
    getPartiallyPayStudents: async (req, res) => {
        try {
            const student = await Student.find({pay: "partially"});
            res.json(student);
        } catch (err) {res.json(err)}
    },
    getStudentsStatus: async (req, res) => {
        try {
            const student = await Student.find({statusId: req.params.id});
            res.json(student);
        } catch (err) {res.json(err)}
    },
    getPercentOffer: async (req, res) => {
        try {
            const student = await Student.find({groupId: req.params.id});
            const studentOffer = student.filter(i => i.statusId == req.body.statusId);
            const countStudentsOffer = studentOffer.length / student.length * 100;

            res.json(countStudentsOffer);
        } catch (err) {res.json(err)}
    },
    addStudent: async (req, res) => {
        try {
            const student = await Student.create({
                groupId: req.params.id,
                statusId: req.body.statusId,
                nameStudent: req.body.nameStudent,
                pay: req.body.pay
            });
            res.json(student);
        } catch (err) {res.json(err)}
    },
    delStudent: async (req, res) => {
        try {
            await Student.findByIdAndRemove(req.params.id);
            res.json("Студент удален")
        } catch (err) {res.json(err)}
    },
    updateStudent: async (req, res) => {
        try {
            const student = await Student.findByIdAndUpdate(req.params.id, {
                droupId: req.params.id,
                statusId: req.body.statusId,
                nameStudent: req.body.nameStudent,
                pay: req.body.pay
            });
            res.json(student)
        } catch (err) {res.json(err)}
    }
}
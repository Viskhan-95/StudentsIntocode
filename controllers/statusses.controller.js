const Status = require("../models/Status.model");

module.exports.statussesController = {
    getAllStudentStatus: async (req, res) => {
        try {
            const status = await Status.find();
            res.json(status);
        } catch (err) {res.json(err)}
    },
    addStatus: async (req, res) => {
        try {
            const status = await Status.create({
                status: req.body.status,
            });
            res.json(status);
        } catch (err) {res.json(err)}
    },
    delStatus: async (req, res) => {
        try {
            await Status.findByIdAndRemove(req.params.id);
            res.json("Статус удалена")
        } catch (err) {res.json(err)}
    },
    updateStatus: async (req, res) => {
        try {
            const status = await Status.findByIdAndUpdate(req.params.id, {
                status: req.body.status,
            });
            res.json(status)
        } catch (err) {res.json(err)}
    }
}
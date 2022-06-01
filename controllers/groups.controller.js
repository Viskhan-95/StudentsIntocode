const Group = require("../models/Group.model");

module.exports.groupsController = {
    getAllGroups: async (req, res) => {
        try {
            const group = await Group.find();
            res.json(group);
        } catch (err) {res.json(err)}
    },
    getWeekAllGroups: async (req, res) => {
        try {
            const group = await Group.find({weekStudy: req.body.weekStudy});
            res.json(group);
        } catch (err) {res.json(err)}
    },
    getGraduatesGroup: async (req, res) => {
        try {
            const group = await Group.find({graduates: true});
            res.json(group);
        } catch (err) {res.json(err)}
    },
    addGroup: async (req, res) => {
        try {
            const group = await Group.create({
                nameGroup: req.body.nameGroup,
                weekStudy: req.body.weekStudy,
                graduates: req.body.graduates
            });
            res.json(group);
        } catch (err) {res.json(err)}
    },
    delGroup: async (req, res) => {
        try {
            await Group.findByIdAndRemove(reg.params.id);
            res.json("Группа удалена")
        } catch (err) {res.json(err)}
    },
    updateGroup: async (req, res) => {
        try {
            const group = await Group.findByIdAndUpdate(reg.params.id, {
                nameGroup: req.body.nameGroup,
                weekStudy: req.body.weekStudy
            });
            res.json(group)
        } catch (err) {res.json(err)}
    }
}
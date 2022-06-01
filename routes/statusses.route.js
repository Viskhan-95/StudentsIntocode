const { Router } = require("express");
const { statussesController } = require("../controllers/statusses.controller")

const route = Router();

route.get('/student/status', statussesController.getAllStudentStatus);
route.post('/student/status/add', statussesController.addStatus);
route.delete('/student/status/delete/:id', statussesController.delStatus);
route.patch('/student/status/update/:id', statussesController.updateStatus);

module.exports = route;
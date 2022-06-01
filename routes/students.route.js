const { Router } = require("express");
const { studentsController } = require("../controllers/students.controller")

const route = Router();

route.get('/student/all', studentsController.getAllStudents);
route.get('/student/group/:id', studentsController.getAllStudentsGroup);
route.get('/student/pay/fully', studentsController.getFullyPayStudents);
route.get('/student/pay/not/fully', studentsController.getNotFullyPayStudents);
route.get('/student/pay/partially', studentsController.getPartiallyPayStudents);
route.get("/student/percent/offer/:id", studentsController.getPercentOffer);
route.get("/student/status/:id", studentsController.getStudentsStatus);
route.post('/student/add/:id', studentsController.addStudent);
route.delete('/student/delete/:id', studentsController.delStudent);
route.patch('/student/update/:id', studentsController.updateStudent);

module.exports = route;
const { Router } = require("express");
const { groupsController } = require("../controllers/groups.controller")

const route = Router();

route.get('/group/all', groupsController.getAllGroups);
route.get("/group/week", groupsController.getWeekAllGroups);
route.get("/group/graduates", groupsController.getGraduatesGroup),
route.post("/group/add", groupsController.addGroup);
route.delete("/group/delete/:id", groupsController.delGroup);
route.patch("/group/update", groupsController.updateGroup);

module.exports = route;
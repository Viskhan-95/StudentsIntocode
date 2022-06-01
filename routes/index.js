const { Router } = require("express");

const route = Router();

route.use(require("./groups.route"));
route.use(require("./students.route"));
route.use(require("./notes.route"));
route.use(require("./statusses.route"));

module.exports = route;
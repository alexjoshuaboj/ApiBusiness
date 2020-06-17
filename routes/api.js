
const router = require('express').Router();
const apiDepartamentsRouter = require('./api/departaments');
const apiEmployeesRouter = require('./api/employees');


router.use('/departaments', apiDepartamentsRouter);
router.use('/employees', apiEmployeesRouter);

module.exports = router;
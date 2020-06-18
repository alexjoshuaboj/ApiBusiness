const router = require('express').Router();
const employees = require('../../models/employees');

/**
 * recover all employees of BBDD
 */

router.get('/', async (req, res) => {
    console.log('Hola');

    try {
        const result = await employees.recover();
        res.json({
            success: "All employees",
            json: result
        });
    } catch (err) {
        res.json({ err: err.message });
    };
});

/**
 * create any employee
 */

router.post('/', async (req, res) => {
    try {
        const result = await employees.createEmployee(req.body);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Employee is create",
                new_employee: req.body,
                id_employee: result.insertId
            });
        } else { res.json({ err: err.message }); }
    } catch (err) {
        res.json({ err: err.message });
    };
});

/**
 * update a employee
 */

router.put('/:idEmployee', async (req, res) => {
    try {
        const result = await employees.updateEmployee(req.body, req.params.idEmployee);
        if (result['affectedRows'] === 1) {
            res.json({
                success: `Employee with ID ${req.params.idEmployee} is update`,
            });
        }
    } catch (err) {
        res.json({ err: err.message });
    };
});

/**
 * remove employee
 */

router.delete('/:idEmployee', async (req, res) => {
    try {
        const result = await employees.removeEmployee(req.params.idEmployee);
        if (result['affectedRows'] === 1) {
            res.json({
                success: `Employee with ID ${req.params.idEmployee} is delete`,
            });
        }
    } catch (err) {
        res.json({ err: err.message });
    };
});

module.exports = router;
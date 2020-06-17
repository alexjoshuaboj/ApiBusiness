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
        })
    } catch (err) {
        res.json({ err: err.message })
    }
});

/**
 * create any employee
 */

router.post('/create', async (req, res) => {
    try {
        const result = await employees.createEmployee(req.body);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Employee is create",
                new_employee: result
            })
        } else { res.json({ err: err.message }) }
    } catch (err) {
        res.json({ err: err.message })
    }
})

/**
 * update a employee
 */

router.patch('/update', async (req, res) => {
    const oldresult = res.json;
    try {
        const result = await employees.updateEmployee(req.body, req.body.idEmployee);
        if (result['affectedRows'] === 1) {
            res.json({
                success: `Employee ${oldresult} is update`,
                employee_update: result
            })
        } else { res.json({ err: err.message }) }
    } catch (err) {
        res.json({ err: err.message })
    }
})

/**
 * remove employee
 */

router.get('/delete')

module.exports = router;
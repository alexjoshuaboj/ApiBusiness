const router = require('express').Router();
const departaments = require('../../models/departaments')

/**
 * recover all departaments
 */

router.get('/', async (req, res) => {
    try {
        const result = await departaments.recoverAllEmployees();
        res.json(result);
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});
/**
 * create any departament
 */
router.post('/create', async (req, res) => {
    try {
        const result = await departaments.createDepartments(req.body);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Departamento agregado"
            })
        }
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});

/**
 * update departaments
 */
router.post('/update', async (req, res) => {
    try {
        const result = await Departamentos.updateDepartment(req.body, req.body.idDepartamento);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Departamento modificado"
            })
        }
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});

/**
 * remove departaments
 */
router.get('/delete/:idDepartamento', async (req, res) => {
    try {
        const result = await departaments.deleteById(req.params.idDepartamento);
        res.json(result);
    } catch (err) {
        res.json({
            error: err.message
        })
    }
})


module.exports = router;
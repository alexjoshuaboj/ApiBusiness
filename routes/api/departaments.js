const router = require('express').Router();
const departaments = require('../../models/departaments')

/**
 * recover all departaments
 */

router.get('/', async (req, res) => {
    try {
        const result = await departaments.recoverAllDepartaments();
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
router.post('/', async (req, res) => {
    try {
        const result = await departaments.createDepartaments(req.body);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Departament create",
                json: req.body
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
router.put('/:idDepartament', async (req, res) => {
    try {
        const result = await departaments.updateDepartament(req.body, req.params.idDepartament);
        if (result['affectedRows'] === 1) {
            res.json({
                success: `Departament with id ${req.params.idDepartament} is edit`
            });
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
router.delete('/:idDepartament', async (req, res) => {
    try {
        const result = await departaments.deleteDepartament(req.params.idDepartament);
        if (result['affectedRows'] === 1) {
            res.json({
                success: `Departament with id ${req.params.idDepartament} is delete`
            });
        }
    } catch (err) {
        res.json({
            error: err.message
        })
    }
})


module.exports = router;
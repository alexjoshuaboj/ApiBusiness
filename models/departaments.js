const recoverAllEmployees = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM departamento', (err, rows) => {
            if (err) reject(err)
            resolve(rows);
        });
    });

};

const createDepartaments = (
    {
        nombre,
        ciudad
    }
) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO departamento (nombre, ciudad) values (?, ?)',
            [nombre, ciudad],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });

};

// GET ID 

const getById = (pDepartamentoId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM departamento WHERE id = ?', [pDepartamentoId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) reject(err.message);
            resolve(rows[0]);
        })
    });
};

const updateById = (pDepartamentoId, { nombre, ciudad }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update clientes set nombre = ?, ciudad = ? where id = ?',
            [nombre, ciudad, pDepartamentoId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    });
};

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM departamento WHERE id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};



module.exports = {
    recoverAllEmployees,
    createDepartaments,
    getById,
    deleteById,
    updateById
}
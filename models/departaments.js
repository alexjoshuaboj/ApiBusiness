const recoverAllDepartaments = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empresa.departamento', (err, rows) => {
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
        db.query('INSERT INTO empresa.departamento (nombre, ciudad) values (?, ?)',
            [nombre, ciudad],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });

};

const updateDepartament = (
    {
        nombre,
        ciudad
    },
    pIdDepartament
) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE departamento SET nombre = ?, ciudad = ? WHERE id = ?',
            [nombre, ciudad, pIdDepartament],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    });
};

const deleteDepartament = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE departamento FROM empresa.departamento WHERE id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};



module.exports = {
    recoverAllDepartaments,
    createDepartaments,
    updateDepartament,
    deleteDepartament
}
const recover = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empresa.empleados', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const createEmployee = ({
    nombre,
    dni,
    sexo,
    fecha_nac,
    salario,
    cargo,
    fk_departamento
}) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO empresa.empleados (nombre, dni, sexo, fecha_nac, salario, cargo, fk_departamento )value (?, ?, ?, ?, ?, ?, ? )', [nombre, dni, sexo, fecha_nac, salario, cargo, fk_departamento], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const updateEmployee = (
    {
        nombre,
        dni,
        sexo,
        fecha_nac,
        salario,
        cargo,
        fk_departamento,
    },
    idEmployee
) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE empresa.empleados SET nombre = ?, dni = ?, sexo = ?, fecha_nac = ?, salario = ?, cargo = ?, fk_departamento = ? WHERE id = ?', [nombre, dni, sexo, fecha_nac, salario, cargo, fk_departamento, idEmployee], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const removeEmployee = (idEmpleado) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM empresa.empleados WHERE id = ?', [idEmpleado], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}


module.exports = {
    recover,
    createEmployee,
    updateEmployee,
    removeEmployee
}
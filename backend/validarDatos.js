function validarDatos(datos) {
    const errores = [];

    if (!datos.nombre || datos.nombre.trim() === '') {
        errores.push('El nombre es obligatorio');
    }
    if (!datos.apellido || datos.apellido.trim() === '') {
        errores.push('El apellido es obligatorio');
    }
    if (!datos.correo || !/^\S+@\S+\.\S+$/.test(datos.correo)) {
        errores.push('El correo es obligatorio y debe ser válido');
    }
    if (!datos.telefono || !/^\+?\d{7,15}$/.test(datos.telefono)) {
        errores.push('El teléfono es obligatorio y debe contener solo números');
    }
    if (!datos.pais || datos.pais.trim() === '') {
        errores.push('El país es obligatorio');
    }
    function validarIntereses(valor) {
        // Acepta true/false o "true"/"false"
        return typeof valor === 'boolean' || valor === 'true' || valor === 'false';
    }

// Validación
    if (!validarIntereses(datos.intereses.seguridad) ||
        !validarIntereses(datos.intereses.servicios) ||
        !validarIntereses(datos.intereses.tecnologia)) {
        errores.push('Los intereses deben ser booleanos o los strings "true"/"false"');
    }

    return errores;
}
export default validarDatos;
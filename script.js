
function validarFormularioDoctor() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const especialidad = document.getElementById('especialidad').value.trim();
    const consultorio = document.getElementById('consultorio').value.trim();
    const correo = document.getElementById('correo').value.trim();
    
    
    // Expresiones regulares para validar campos
    const nombreDoctorExp = /^[A-Za-z\s]+$/;
    const apellidoDoctorExp = /^[A-Za-z\s]+$/;
    const consultorioDoctorExp = /^[0-9]+$/;
    const correoDoctorExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar el campo de nombre utilizando la expresión regular
    if (!nombreDoctorExp.test(nombre)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios).');
        return false;   
    }

    // Validar el campo de apellido utilizando la expresión regular
    if (!apellidoDoctorExp.test(apellido)) {
        alert('Por favor, ingrese un apellido válido (solo letras y espacios).');
        return false;   
    }

    function especialidadValida(especialidad) {
        const opcionesValidas = ['Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología'];
    
        return opcionesValidas.includes(especialidad);
    }
    // Validar el campo de consultorio utilizando la expresión regular
    if (!consultorioDoctorExp.test(consultorio)) {
        alert('El número de consultorio solo debe contener números.');
        return false;
    }
    // Validar el campo de correo utilizando la expresión regular
    if (!correoDoctorExp.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    
     // Asignar las funciones de validación a los formularios
    const doctorForm = document.getElementById('doctor-form');
    doctorForm.addEventListener('submit', (event) => {
    if (!validarFormularioDoctor()) {
    event.preventDefault();
    }
    });
    return true;
}
   // Asignar las funciones de validación a los formularios
    const doctorForm = document.getElementById('doctor-form');
    doctorForm.addEventListener('submit', (event) => {
    if (!validarFormularioDoctor()) {
    event.preventDefault();
}
});
// Función para validar campos del formulario de pacientes
function validarFormularioPaciente() {
    const nombrePaciente = document.getElementById('nombre_paciente').value.trim();
    const apellidoPaciente = document.getElementById('apellido_paciente').value.trim();
    const cedulaPaciente = document.getElementById('cedula_paciente').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const especialidadRequerida = document.getElementById('especialidad').value.trim();

    // Expresión regular para validar cédula (10 a 12 dígitos numéricos)
     // Expresiones regulares para validar campos
    const nombrePattern = /^[A-Za-z\s]+$/;
    const apellidoPattern = /^[A-Za-z\s]+$/;
    const cedulaPattern = /^[0-9]{8,12}$/;
    const edadPattern = /^\d+$/;
    const telefonoPattern = /^\d+$/;

    // Validar el campo de nombre utilizando la expresión regular
    if (!nombrePattern.test(nombrePaciente)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios).');
        return false;   
    }

    // Validar el campo de apellido utilizando la expresión regular
    if (!apellidoPattern.test(apellidoPaciente)) {
        alert('Por favor, ingrese un apellido válido (solo letras y espacios).');
        return false;   
    }

    if (!cedulaPattern.test(cedulaPaciente)) {
        alert('La cédula debe contener entre 10 y 12 dígitos numéricos.');
        return false;
    }
     // Validar edad utilizando la expresión regular
    if (!edadPattern.test(edad)) {
        alert('Por favor, ingrese una edad válida (solo números enteros).');
        return false;
    }
    // Validar teléfono utilizando la expresión regular
    if (!telefonoPattern.test(telefono)) {
        alert('Por favor, ingrese un teléfono válido (solo números).');
        return false;
    }
    function especialidadValida(especialidadRequerida) {
        const opcionesValidas = ['Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología'];
    
        return opcionesValidas.includes(especialidadRequerida);
    }
    return true;
}
    const pacienteForm = document.getElementById('paciente-form');
    pacienteForm.addEventListener('submit', (event) => {
    if (!validarFormularioPaciente()) {
        event.preventDefault();
    }
});

// Función para validar campos del formulario de pacientes
function validarFormularioCitas() {
    const cedulaPaciente = document.getElementById('cedula_paciente').value.trim();
    const nombrePaciente = document.getElementById('nombre_paciente').value.trim();
    const nombreDoctor = document.getElementById('nombre_paciente').value.trim();
    const especialidadRequerida = document.getElementById('especialidad').value.trim();

    // Expresión regular para validar cédula (10 a 12 dígitos numéricos)
     // Expresiones regulares para validar campos
    const cedulaPattern = /^[0-9]{8,12}$/;
    const nombrePattern = /^[A-Za-z\s]+$/;
    const nombredocto = /^[A-Za-z\s]+$/;

    if (!cedulaPattern.test(cedulaPaciente)) {
        alert('La cédula debe contener entre 10 y 12 dígitos numéricos.');
        return false;
    }
    // Validar el campo de nombre utilizando la expresión regular
    if (!nombrePattern.test(nombrePaciente)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios).');
        return false;   
    }

    // Validar el campo de nombre utilizando la expresión regular
    if (!nombredocto.test(nombreDoctor )) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios).');
        return false;   
    }

    if (!cedulaPattern.test(cedulaPaciente)) {
        alert('La cédula debe contener entre 10 y 12 dígitos numéricos.');
        return false;
    }
     // Validar edad utilizando la expresión regular
    function especialidadValida(especialidadRequerida) {
        const opcionesValidas = ['Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología'];
    
        return opcionesValidas.includes(especialidadRequerida);
    }
    return true;
}
    const citaForm = document.getElementById('cita-form');
    pacienteForm.addEventListener('submit', (event) => {
    if (!validarFormularioCitas()) {
        event.preventDefault();
    }
});
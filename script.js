function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var id = document.getElementById("id").value;
    var descripcion = document.getElementById("descripcion").value;

    // Validar campos obligatorios
    if (nombre === "" || id === "" || descripcion === "") {
        alert("Por favor, complete todos los campos obligatorios (Nombre del Caso de Uso, ID, Descripción).");
        return false; // Detener la impresión
    }

    // Si todo está bien, permitir la impresión
    window.print();
    return true;
}

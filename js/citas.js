const formCita = document.getElementById("formCita");

formCita.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombrePaciente").value;
    const documento = document.getElementById("documento").value;
    const especialidad = document.getElementById("especialidad").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const motivo = document.getElementById("motivo").value;

    const nuevaCita = {
        nombre,
        documento,
        especialidad,
        fecha,
        hora,
        motivo
    };

    let citas = JSON.parse(localStorage.getItem("citas")) || [];
    citas.push(nuevaCita);
    localStorage.setItem("citas", JSON.stringify(citas));

    alert("Cita agendada exitosamente ✅");

    formCita.reset();
    modal.style.display = "none";
});
    
const modal = document.getElementById("modalCita");
const btn = document.getElementById("btnCita");
const cerrar = document.getElementById("cerrarModal");
const cancelar = document.querySelector(".btn-cancelar");

btn.addEventListener("click", function() {
    modal.style.display = "flex";
});

cerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
    
});

cancelar.addEventListener("click", function() {
    modal.style.display = "none";
});


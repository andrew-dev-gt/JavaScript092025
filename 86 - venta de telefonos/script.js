const API_URL = 'https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos';

async function obtenerTodos() {
    try {
        const respuesta = await fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db');
        const data = await respuesta.json();
        
        const cuerpoTabla = document.getElementById("tblContenido");
        let salida = "";
        
        data.dispositivos.forEach(elemento => {
            salida += `
                <tr>
                    <td><strong>#${elemento.id}</strong></td>
                    <td>${elemento.marca}</td>
                    <td>${elemento.modelo}</td>
                    <td>${elemento.color}</td>
                    <td>${elemento.almacenamiento} GB</td>
                    <td>${elemento.procesador}</td>
                </tr>`;
        });
        cuerpoTabla.innerHTML = salida;
    } catch (error) {
        console.error("Error al cargar datos:", error);
    }
}

async function consultarUno() {
    const id = document.getElementById('txtConsulta').value;
    if (!id) return alert('Por favor, ingrese un ID');

    try {
        const respuesta = await axios.get(`${API_URL}/${id}`);
        const dispositivo = respuesta.data;
        
        document.getElementById('consultaNombre').value = dispositivo.marca;
        document.getElementById('consultaModelo').value = dispositivo.modelo;
        document.getElementById('consultaColor').value = dispositivo.color;
        document.getElementById('consultaAlmacenamiento').value = dispositivo.almacenamiento;
        document.getElementById('consultaProcesador').value = dispositivo.procesador;
    } catch (error) {
        alert("No se encontró el artículo.");
    }
}

async function agregarUno() {
    const nuevoDispositivo = {
        marca: document.getElementById("inputMarca").value,
        modelo: document.getElementById("inputModelo").value,
        color: document.getElementById("inputColor").value,
        almacenamiento: document.getElementById("inputAlmacenamiento").value,
        procesador: document.getElementById("inputProcesador").value
    };

    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoDispositivo)
        });
        const data = await respuesta.json();
        alert(`Producto agregado: ${data.marca}`);
        obtenerTodos();
    } catch (error) {
        console.error(error);
    }
}

async function modificarUno() {
    const id = document.getElementById('txtConsulta').value;
    const datos = {
        marca: document.getElementById('consultaNombre').value,
        modelo: document.getElementById('consultaModelo').value,
        color: document.getElementById('consultaColor').value,
        almacenamiento: document.getElementById('consultaAlmacenamiento').value,
        procesador: document.getElementById('consultaProcesador').value
    };

    try {
        const { data } = await axios.put(`${API_URL}/${id}`, datos);
        alert(`Artículo ${id} actualizado.`);
        obtenerTodos();
    } catch (error) {
        alert("Error al modificar.");
    }
}

async function eliminarUno() {
    const id = document.getElementById('txtConsulta').value;
    if (!id) return alert("Ingrese un ID");

    try {
        await axios.delete(`${API_URL}/${id}`);
        alert(`Artículo ${id} eliminado.`);
        obtenerTodos();
    } catch (error) {
        alert("Error al eliminar.");
    }
}
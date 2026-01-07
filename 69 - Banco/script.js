document.addEventListener("DOMContentLoaded", () => {
    fetch("resumen.json")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(data => {
            document.getElementById("banco").textContent = data.banco;
            document.getElementById("sucursal").textContent = data.sucursal;
            document.getElementById("titular").textContent = data.titular;
            document.getElementById("cuenta").textContent = data.nro_cuenta;
            
            document.getElementById("usd").textContent = 
                `${data.saldo[0].monto.toLocaleString()} ${data.saldo[0].moneda}`;
            
            document.getElementById("eur").textContent = 
                `${data.saldo[1].monto.toLocaleString()} ${data.saldo[1].moneda}`;

            document.getElementById("cbu").textContent = data.cbu;
            document.getElementById("abierto").textContent = data.abierto;
        })
        .catch(err => {
            console.error(err);
            document.getElementById("banco").textContent = "Error de conexión";
        });
});
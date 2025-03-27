document.addEventListener("DOMContentLoaded", () => {
    // URL de la API (cámbiala por la tuya)
    const API_URL = "http://54.211.149.218/api-php-world/api/get_countries.php";

    // Función para obtener y mostrar los datos
    fetch(API_URL)
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(data => {
            const tableBody = document.getElementById("countryTableBody");
            data.forEach(country => {
                // Crear una nueva fila en la tabla
                const row = `<tr>
                    <td>${country.code}</td>
                    <td>${country.name}</td>
                    <td>${country.continent}</td>
                    <td>${country.region}</td>
                    <td>${country.population}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Error al obtener los datos:", error));
});

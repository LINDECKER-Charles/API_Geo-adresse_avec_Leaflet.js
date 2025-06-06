/* On récupère l'input et le selecteur */
const inputCP = document.querySelector(".cp");
const selectVille = document.querySelector(".ville");
/* On affiche la France par défaut */
const map = L.map("map").setView([46.603354, 1.888334], 5); // Vue France
/* On défini le marqueur sur null pour éviter une erreur plus tard */
let marker = null;

/* On check quand la val de l'input change */
inputCP.addEventListener("input", () => {
    /* On récupère la val de l'input */
    let value = inputCP.value;
    selectVille.innerHTML = null;

    /* On fait la requet API */
    fetch(`https://geo.api.gouv.fr/communes?codePostal=${value}&fields=centre&format=json`)
        .then((reponse) => reponse.json()) /* Conversion de la réponse HTTP en json */
        .then((data) => {
            console.log(data);
            /* On crée une option pour chaque commune */
            data.forEach((ville) => {
                let option = document.createElement("option");
                option.value = `${ville.centre.coordinates[0]},${ville.centre.coordinates[1]}`;
                option.innerHTML = `${ville.nom}`;

                selectVille.appendChild(option);
            });
        });
});

selectVille.addEventListener("change", () => {
    /* On récupère les vals dans le selecteur */
  const [lat, lng] = selectVille.value.split(",");
  console.log(lat, lng)
  /* On défini les coordonnés de la map */
  map.setView([lng, lat], 13);
  /* On rajoute un marker */
  marker = L.marker([lng, lat]).addTo(map);
});

/* On récupère l'image de la map */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
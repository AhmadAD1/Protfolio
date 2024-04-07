import { countries } from "./services/countriesService.js";
import { createCardsList } from "./services/domService.js";

createCardsList(countries);

console.log(countries);
function toProject() {
    var img = document.getElementById("logo");
    img.addEventListener('click', function () {
        // Navigate to another page
        window.location.href = '../../index.html';
    });
}
toProject();

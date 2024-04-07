

const action = document.getElementById("actions");

document.getElementById("menu").addEventListener("click", () => {
    openmenu();
})
function openmenu() {


    document.getElementById("menu").classList.toggle("active");
    document.getElementById("actions").classList.toggle("active");
}
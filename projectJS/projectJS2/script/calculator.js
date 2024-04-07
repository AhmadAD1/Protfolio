const display = document.getElementById("display");
function operator(op) {
    if (display.value.charAt(display.value.length - 1) == '+' || display.value.charAt(display.value.length - 1) == '-' || display.value.charAt(display.value.length - 1) == '*' || display.value.charAt(display.value.length - 1) == '/') {
        display.value = display.value.substring(0, display.value.length - 1);
    }
    display.value += op;

}
function number(num) {
    display.value += num;
}
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (err) {
        display.value = "Error";
    }

}
function clearr() {
    display.value = ' ';
}
function toProject() {
    var img = document.getElementById("logo");
    img.addEventListener('click', function () {
        // Navigate to another page
        window.location.href = '../../index.html';
    });
}
toProject();

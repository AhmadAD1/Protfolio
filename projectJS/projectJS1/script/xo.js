let turner = 'x';
let count = 0;
function turn(id) {
    let block = document.getElementById(id);
    if (block.innerHTML == '' && count == 0) {
        block.innerHTML = turner;
        if (turner == 'x') {
            turner = 'o';
        } else {
            turner = 'x';
        }
        title.innerHTML = turner + "'s turn";
        title.style.fontSize = '3em';
        title.style.alignItems = 'center';
        title.style.margin = '0';
        checkWinner();
    }


}
function blockwinner(num1, num2, num3) {
    if (document.getElementById(num1).innerHTML == document.getElementById(num2).innerHTML && document.getElementById(num1).innerHTML == document.getElementById(num3).innerHTML && document.getElementById(num1).innerHTML != '') {
        document.getElementById(num1).style.backgroundColor = 'black';
        document.getElementById(num2).style.backgroundColor = 'black';
        document.getElementById(num3).style.backgroundColor = 'black';
    }

}
function restart() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.backgroundColor = 'lightcoral';
    }
    turner = 'x';
    title.innerHTML = turner + "'s turn";
    count = 0;

}
function checkWinner() {
    if (document.getElementById(0).innerHTML == document.getElementById(1).innerHTML && document.getElementById(1).innerHTML == document.getElementById(2).innerHTML && document.getElementById(0).innerHTML != '') {
        title.innerHTML = document.getElementById(0).innerHTML + ' is the winner';
        blockwinner(0, 1, 2);
        count = 1;

    }


    if (document.getElementById(3).innerHTML == document.getElementById(4).innerHTML && document.getElementById(3).innerHTML == document.getElementById(5).innerHTML && document.getElementById(3).innerHTML != '') {
        title.innerHTML = document.getElementById(3).innerHTML + ' is the winner';
        blockwinner(3, 4, 5);
        count = 1;

    }

    if (document.getElementById(6).innerHTML == document.getElementById(7).innerHTML && document.getElementById(6).innerHTML == document.getElementById(8).innerHTML && document.getElementById(6).innerHTML != '') {
        title.innerHTML = document.getElementById(6).innerHTML + ' is the winner';
        blockwinner(6, 7, 8);
        count = 1;
    }

    if (document.getElementById(0).innerHTML == document.getElementById(3).innerHTML && document.getElementById(0).innerHTML == document.getElementById(6).innerHTML && document.getElementById(0).innerHTML != '') {
        title.innerHTML = document.getElementById(0).innerHTML + ' is the winner';
        blockwinner(0, 3, 6);
        count = 1;


    }
    if (document.getElementById(1).innerHTML == document.getElementById(4).innerHTML && document.getElementById(1).innerHTML == document.getElementById(7).innerHTML && document.getElementById(1).innerHTML != '') {
        title.innerHTML = document.getElementById(1).innerHTML + ' is the winner';
        blockwinner(1, 4, 7);
        count = 1;

    }
    if (document.getElementById(2).innerHTML == document.getElementById(5).innerHTML && document.getElementById(2).innerHTML == document.getElementById(8).innerHTML && document.getElementById(2).innerHTML != '') {
        title.innerHTML = document.getElementById(2).innerHTML + ' is the winner';
        blockwinner(2, 5, 8);
        count = 1;

    }
    if (document.getElementById(0).innerHTML == document.getElementById(4).innerHTML && document.getElementById(0).innerHTML == document.getElementById(8).innerHTML && document.getElementById(0).innerHTML != '') {
        title.innerHTML = document.getElementById(0).innerHTML + ' is the winner';
        blockwinner(0, 4, 8);
        count = 1;

    }
    if (document.getElementById(2).innerHTML == document.getElementById(4).innerHTML && document.getElementById(2).innerHTML == document.getElementById(6).innerHTML && document.getElementById(2).innerHTML != '') {
        title.innerHTML = document.getElementById(2).innerHTML + ' is the winner';
        blockwinner(2, 4, 6);
        count = 1;

    }



}
function toProject() {
    var img = document.getElementById("logo");
    img.addEventListener('click', function () {
        // Navigate to another page
        window.location.href = '../../index.html';
    });
}
toProject();

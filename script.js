for (var i = 0; i < 20; i++) {
    var box = document.createElement('div');
        box.setAttribute('class','box');

    if (i === 0) {
        var img = document.createElement('img');
        img.setAttribute('src', 'Superman.jpg');
        img.setAttribute('id', 'superman');
         box.appendChild(img)
    }

    document.getElementById('player-1').appendChild(box);
}
for (var i = 0; i < 20; i++) {
    var box = document.createElement('div');
        box.setAttribute('class','box');

    if (i === 0) {
        var img = document.createElement('img');
        img.setAttribute('src', 'download.jpg');
        img.setAttribute('id','download');
         box.appendChild(img)
    }

    document.getElementById('player-2').appendChild(box);
}

function getRandomInt(max) {
    return Math.ceil(Math.random() * Math.floor(max));

}
// console.log("llhlhlh",getRandomInt(6));

// var board = [
//   ['player-1','','','','','','','','','','','','','','','','','','',''],
//   ['player-2','','','','','','','','','','','','','','','','','','',''],
// ];

var playerOnePosition = 0;
var playerTwoPosition = 0;

var finish = 20;

function diceRoll () {
    var playerOneDice = getRandomInt(6);
    var playerTwoDice = getRandomInt(6);

    document.getElementById('player-1').childNodes[playerOnePosition].innerHTML = '';
    document.getElementById('player-2').childNodes[playerTwoPosition].innerHTML = '';


    playerOnePosition = playerOnePosition + playerOneDice;
    playerTwoPosition = playerTwoPosition + playerTwoDice;

    if (playerOnePosition >= 19) {
        playerOnePosition = 19;
        alert('Player 1 menang!');
        window.location.reload();
    }
    
    if (playerTwoPosition >= 19) {
        playerTwoPosition = 19;
        alert('Player 2 menang!');
        window.location.reload();
    } 

    moveForward();

}


function moveForward () {

    var img = document.createElement('img');
        img.setAttribute('src', 'Superman.jpg');
        img.setAttribute('id', 'superman');
    document.getElementById('player-1').childNodes[playerOnePosition].appendChild(img);

    var img2 = document.createElement('img');
        img2.setAttribute('src', 'download.jpg');
        img2.setAttribute('id', 'download');
    document.getElementById('player-2').childNodes[playerTwoPosition].appendChild(img2);
}


// function bodyOnKeyDown (event) {
//   var boxes = document.getElementsByClassName('box');

//   var x = 20;    
//   var acak = Math.floor(Math.random () * x ) +'';

//     var character = document.getElementById('player-1').childNodes
//     var img = document.createElement('img');
//         img.setAttribute('src', 'Superman.jpg');
//         img.setAttribute('id', 'superman');
//     character[acak].appendChild(img)
//     var character = document.getElementById('player-2').childNodes
//     var img = document.createElement('img');
//         img.setAttribute('src', 'download.jpg');
//         img.setAttribute('id', 'maling');
//     character[acak].appendChild(img)
// }





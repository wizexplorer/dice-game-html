var n = Math.random();
var m = Math.random();
// var n2 = Math.random();
// n = n*6;
m = Math.floor(m*6 + 1);   //sasuke
n = Math.floor(n*6 + 1);  // naruto
// var a = 2;
document.querySelector(".img1").src = "images/dice"+ m +".png";
document.querySelector(".img2").src = "images/dice" + n + ".png";
// document.querySelector(".img2").src = "images/dice2.png";

// document.querySelector("h1").innerText ="HELLO";

if (n>m) {
    document.querySelector("h1").innerHTML = "<img id = \"sasukeLose\" src = 'https://c.tenor.com/lIbGuWiS5nAAAAAM/magg-sasuke-uchiha.gif'> Naruto Wins! <img id = \"narutoWin\" src = 'https://i.pinimg.com/originals/e8/84/99/e884990a7863c90811e37b275cae3f0c.gif'>";
} else if (m>n) {
    document.querySelector("h1").innerHTML = "<img id = \"sasukeWin\" src = 'https://c.tenor.com/U2E38Xav2psAAAAC/naruto-sasuke.gif'> Sasuke Wins! <img id = \"narutoLose\" src = 'https://cdn.shopify.com/s/files/1/0273/6966/8694/products/NarutoUzuiii_600x.gif?v=1640730314'>";
} else {
    document.querySelector("h1").innerHTML = "Draw!<img id= \"drawId\" src = 'images/koroSensei.jpg' >";
}

// document.querySelector("h1").innerHTML = "<img id = \"sasukeLose\" src = 'https://c.tenor.com/lIbGuWiS5nAAAAAM/magg-sasuke-uchiha.gif'> Player 1 Wins! <img id = \"narutoWin\" src = 'https://i.pinimg.com/originals/e8/84/99/e884990a7863c90811e37b275cae3f0c.gif'>";
// Buat variabel berisi angka random dari 1 - 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Buat variabel yang menginisiasikan dice1.png - dice6.png
let randomDiceImage = "dice" + randomNumber1 + ".png";

// Buat variabel yang menginisiasikan sumber gambar dari images/dice1.png - images/dice6.png
let randomImageSource = "images/" + randomDiceImage;

// Buat variabel yang meninisiasikan .img1 dari HTML
let image1 = document.querySelectorAll("img")[0];

// Ubah "src" pada HTML menjadi image random
image1.setAttribute("src", randomImageSource);

// Buat untuk image 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Mengubah h1 pada HTML
let h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Player 2 Wins 🚩";
} else {
  h1.innerHTML = "Draw!";
}

const images = ["image_01.jpg","image_02.jpg","image_03.jpg","image_04.jpg","image_05.png","image_06.png"]

// 이미지 랜덤으로
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);
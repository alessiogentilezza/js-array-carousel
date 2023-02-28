const imgArray = [
    'img/04.webp',
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/05.webp'
];

const containerImg = document.querySelector('.container-small');

for (let i = 0; i < imgArray; i++) {
    const imgWrapper = `<div class="wrapper-img">
                                <img src="${imgArray[i]}">
                            </div>`;
}

console.log(imgArray)
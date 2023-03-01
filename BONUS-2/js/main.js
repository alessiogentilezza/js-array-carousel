const imgArray = [
    'img/04.webp',
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/05.webp'
];

const containerImg = document.querySelector('.img-container');
const containerImgThumble = document.querySelector('.img-container-thumble');

let containerImgContent = "";
let containerImgContentThumble = "";

for (let i = 0; i < imgArray.length; i++) {
    const imgWrapper = `<div class="wrapper-img">
                                <img src="${imgArray[i]}">
                            </div>`;
    const imgWrapperThumble = `<div class="wrapper-img-thumble">
                                    <img src="${imgArray[i]}">
                                </div>`;
    containerImgContent += imgWrapper;
    containerImgContentThumble += imgWrapperThumble;
}

containerImg.innerHTML = containerImgContent;
containerImgThumble.innerHTML = containerImgContentThumble;

const wrapperImg = document.getElementsByClassName('wrapper-img');
const wrapperImgThumble = document.getElementsByClassName('wrapper-img-thumble');

let activeImage = 0;

wrapperImg[activeImage].classList.add('d-block');
// wrapperImgThumble[activeImage].classList.add('d-block');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

console.log(activeImage);

nextDom.addEventListener('click',
    function () {

        console.log(activeImage);

        wrapperImg[activeImage].classList.remove('d-block');

        if (activeImage == wrapperImg.length - 1) {
            activeImage = 0;
        } else {
            activeImage = activeImage + 1;
        }
        console.log(activeImage);

        wrapperImg[activeImage].classList.add('d-block');

    }
);

prevDom.addEventListener('click',
    function () {

        wrapperImg[activeImage].classList.remove('d-block');

        if (activeImage == 0) {
            activeImage = wrapperImg.length - 1;
        } else {
            activeImage = activeImage - 1;
        }

        wrapperImg[activeImage].classList.add('d-block');
    }
);
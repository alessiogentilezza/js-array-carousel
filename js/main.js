const imgArray = [
    'img/04.webp',
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/05.webp'
];

const containerImg = document.querySelector('.img-container');

let containerImgContent = "";

for (let i = 0; i < imgArray.length; i++) {
    const imgWrapper = `<div class="wrapper-img">
                                <img class="img-dim" src="${imgArray[i]}">
                            </div>`;
    containerImgContent += imgWrapper;
}

containerImg.innerHTML = containerImgContent;

const wrapperImg = document.getElementsByClassName('wrapper-img');
console.log(wrapperImg);

let activeImage = 0;

wrapperImg[activeImage].classList.add('d-block');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click',
    function () {
        if (activeImage < wrapperImg.length - 1) {

            wrapperImg[activeImage].classList.remove('d-block');
            activeImage++;
            wrapperImg[activeImage].classList.add('d-block');

            if (activeImage == wrapperImg.length - 1) {
                nextDom.classList.add('d-none');
            }
        }
    }
);
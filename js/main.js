const imgArray = [
    'img/04.webp',
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/05.webp'
];

const containerImg = document.querySelector('.img-container');

let containerImgContent = "";

for (let i = 0; i < imgArray; i++) {
    const imgWrapper = `<div class="wrapper-img">
                                <img src="${imgArray[i]}">
                            </div>`;
    containerImgContent += imgWrapper;
}

containerImg.innerHTML = containerImgContent;

const wrapperImg = document.getElementsByClassName('wrapper-img');

let activeImage = 0;

wrapperImg[activeImage].classList.add('d-block');

// console.log(wrapperImg);

const nextDom = document.querySelector('#next');

nextDom.addEventListener('click',
    function () {
        if (activeImage < wrapperImg.length - 1) {

            wrapperImg[activeImage].classList.remove('d-block');
            activeImage++;
            wrapperImg[activeImage].classList.add('d-block');

        }
    }
);
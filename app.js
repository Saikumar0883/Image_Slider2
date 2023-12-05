const images = document.querySelectorAll('.imagesdiv img');
let setFullImg = document.querySelector('.fullImage');
let popUpContainer = document.querySelector('.image-container');
let maindiv = document.querySelector('.imagesdiv');
let nextbtn = document.querySelector('.nextbtn');
let prevbtn = document.querySelector('.prevbtn');
let closebtn = document.querySelector('.closeElement');
closebtn.addEventListener("click", () => {
    popUpContainer.style.display = "none";
    maindiv.style.display = "flex";
    document.querySelector('.closeElement').style.display="none";
    document.querySelector('body').classList.add('hel');

})

let currentImageIndex = 0;
function clicked(index) {
    currentImageIndex = index;
    popUpContainer.style.display = "block";
    maindiv.style.display = "none";
    document.querySelector('body').classList.remove('hel');
    document.querySelector('.closeElement').style.display="flex";
    currentImageIndex = index;
    console.log(images[index]);
    setImage(images[index].src);

}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        clicked(index)
    });
});


function setImage(src) {
    
    setFullImg.setAttribute('src', src);
    if (currentImageIndex == images.length - 1) {
        nextbtn.style.visibility = 'hidden';

    }
    if (currentImageIndex == 0) {
        prevbtn.style.visibility = 'hidden';

    }
}
function nextImage() {
   
    currentImageIndex += 1;
    if (prevbtn.style.visibility == 'hidden');
    prevbtn.style.visibility = 'visible';
    setFullImg.classList.add('aniImgl');
    setTimeout(()=>{
        setFullImg.classList.remove('aniImgl');
    },900)
    setImage(images[currentImageIndex].src);
}


function prevImage() {
    currentImageIndex -= 1;
    if (nextbtn.style.visibility == 'hidden');
    nextbtn.style.visibility = 'visible';
    setFullImg.classList.add('aniImgr');
    setTimeout(()=>{
        setFullImg.classList.remove('aniImgr');
    },900)
    setImage(images[currentImageIndex].src);
}

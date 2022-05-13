'use strict'

let currentPhotoID;
let photos = ['img/2.jpg','img/3.jpg','img/4.jpg'];
let description = ['Казань - город, в котором я живу', 'Набережные Челны - город в котором я родился', 'КФУ - ВУЗ, где я учусь'];

let i = 0;
let slider_cont = document.getElementById('slider');
let descNode = document.createTextNode(description[0]);
let descTag = document.createElement('p');
descTag.className = 'description'
descTag.appendChild(descNode);
slider_cont.appendChild(descTag);
let photoSlider = document.getElementById('imgToShow');
let desc = slider_cont.querySelector('.description');

if (localStorage.getItem('currentPhotoID') != undefined) {
    i = JSON.parse(localStorage.getItem('currentPhotoID'));
    photoSlider.src = photos[i];
    desc.innerHTML = description[i];
}
else {
    photoSlider.src = photos[0];
    desc.innerHTML = description[0];
}
/*кнопки*/
let nextP = document.getElementById('nextPhoto');
let prevP = document.getElementById('prevPhoto');
nextP.addEventListener('click',nextPic);
prevP.addEventListener('click',prevPic);

function nextPic() {
    i++;
    if (i >= photos.length) i = 0;
    photoSlider.className = "slideRight";
    desc.classList.add('opacityDescription');
    currentPhotoID = i;
    setTimeout(nextSlide,500);
    function nextSlide() {
        photoSlider.src = photos[i]
        desc.innerHTML = description[i];
        photoSlider.classList.remove('slideRight');
        desc.classList.remove('opacityDescription');
    }
    localStorage.setItem('currentPhotoID', JSON.stringify(currentPhotoID));
}
function prevPic() {
    i--;
    if (i < 0) i = photos.length - 1;
    photoSlider.className = "slideLeft";
    desc.classList.add('opacityDescription');
    currentPhotoID = i;
    setTimeout(nextSlide,500);
    function nextSlide() {
        photoSlider.src = photos[i]
        desc.innerHTML = description[i];
        photoSlider.classList.remove('slideLeft');
        desc.classList.remove('opacityDescription');
    }
    localStorage.setItem('currentPhotoID', JSON.stringify(currentPhotoID));
}
let contact = document.querySelector('.contact');
contact.addEventListener('click', openMenu);

function openMenu() {
    let AboutInfo = document.querySelector('.AboutInfo');
    let AboutInfoLi = document.querySelectorAll('.AboutInfo li');
    if (AboutInfo.style.display != 'block') {
        AboutInfo.style.display = 'block';
        setTimeout(transitionOpen,1)
        function transitionOpen() {
            AboutInfo.classList.add('openMenu');
            for (let elem of AboutInfoLi)
                elem.style.display = 'block';
        }
    }
    else {
        AboutInfo.classList.remove('openMenu');
        setTimeout(transitionClose,600);
        function transitionClose() {
            AboutInfo.style.display = 'none';
            for (let elem of AboutInfoLi)
                elem.style.display = 'none';
        }
    }    
}
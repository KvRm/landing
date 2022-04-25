'use strict'

let currentPhotoID;
let photos = ['../WebSite/img/2.jpg','../WebSite/img/3.jpg','../WebSite/img/4.jpg'];
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
contact.onclick = function() {
    let contactUl = document.createElement('ul');
    let contactLi = document.createElement('li');
    
}
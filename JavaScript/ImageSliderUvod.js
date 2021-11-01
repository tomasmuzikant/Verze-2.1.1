"use strict"

window.onload = function () {
    initGallery();
    let timer = setInterval(function () {
        plusSlides(1);
    }, 10000);
    let stopTimer = document.querySelectorAll(".stop-timer")
    for(let element of stopTimer){
        element.addEventListener("click", function(){
            console.log("Povedlo se")
            clearInterval(timer)
        })
    }
}

let slideIndex = 0;
let slides;
let captionText;
let dots = [];
let dotsContainer = document.getElementById("dotsContainer");


function initGallery() {
    slides = document.querySelectorAll(".imageHolder");
    slides[slideIndex].style.opacity = 1;
    captionText = document.querySelector(".captionText");
    captionText.classList.add("slideTextFromBottom")
    captionText.innerHTML = slides[slideIndex].querySelector(".captionText").innerHTML;



    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("span");
        dot.className = "dots stop-timer"
        dot.setAttribute("onclick", "moveSlide(" + i + ")");
        dotsContainer.append(dot);
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
    setTimeout(removeClass, 1400)
}

function plusSlides(n) {
    moveSlide(slideIndex + n);
    setTimeout(removeClass, 1400)

}

function moveSlide(n) {
    captionText.classList.remove("slideTextFromBottom")
    var i, current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    }
    if (n > slideIndex) {
        if (n >= slides.length) { n = 0; }
        moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlideAnimClass.forNext = "moveLeftNextSlide";
    } else if (n < slideIndex) {
        if (n < 0) { n = slides.length - 1 }
        moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
        moveSlideAnimClass.forNext = "moveRightNextSlide";
    }
    if (n != slideIndex) {
        next = slides[n];
        current = slides[slideIndex];

        for (let i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity = 0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex = n;
        captionText.classList.add("slideTextFromBottom")
        captionText.innerHTML = slides[n].querySelector(".captionText").innerHTML;
    }
}

function removeClass() {
    captionText.classList.remove("slideTextFromBottom")
}





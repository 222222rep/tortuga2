// down-top

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal)

// left-right

function fader() {
    var faders = document.querySelectorAll(".fader");

    for (var i = 0; i < faders.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = faders[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            faders[i].classList.add("active");
        } else {
            faders[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", fader)

// right-left

function fadel() {
    var fadels = document.querySelectorAll(".fadel");

    for (var i = 0; i < fadels.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = fadels[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            fadels[i].classList.add("active");
        } else {
            fadels[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", fadel)
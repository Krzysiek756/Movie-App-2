//Hamburger

var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}


const hamburger = document.querySelector('.burger-navbar');
const navLink = document.querySelector('.menu');
const navIcon = document.querySelector('.header__icon');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('hidden');
    container.classList.toggle('overlay');

    navLink.classList.toggle('is-active'),
        navIcon.classList.toggle('is-active');




});



//Scroller
const nav = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        nav.classList.add("scrolled");

    } else {
        nav.classList.remove("scrolled");
    }
});
var menuBtn = document.getElementById('Menu');
var navLinks = document.getElementById('nav-links');

menuBtn.onclick = function () {
    navLinks.classList.toggle('show');
};

var links = document.querySelectorAll('#nav-links a');

links.forEach(function (link) {
    link.onclick = function () {
        navLinks.classList.remove('show');
    };
});

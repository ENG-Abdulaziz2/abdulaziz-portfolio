const burger = document.getElementById('burger');
const nav = document.querySelector('.nav-links');


burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

 
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

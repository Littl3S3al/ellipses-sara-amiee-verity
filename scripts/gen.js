const loadingScreen = document.querySelector('.onload');
let begin = document.querySelector('button');
let loadin = document.querySelector('.loading');

window.addEventListener('load', () => {
    begin.style.display = 'block';
    loadin.style.display = 'none';
});

begin.addEventListener('click', () => {
    loadingScreen.style.opacity = 0;
    loadingScreen.style.zIndex = -100;
})


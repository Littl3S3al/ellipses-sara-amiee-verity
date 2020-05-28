const placeholder1 = document.querySelector('#placeholder1');
const token1 = document.querySelector('#token1');
const audio = new Audio('assets/audio/beep.wav');
let played = false;
const mask = document.querySelector('#mask');
const images1 = ['bw-dump.jpg', 'carnival.jpg', 'casbah.jpg', 'choc-99.jpg', 'daggafontein.jpg', 'dump.jpg', 'dump-v.jpg'];
let bottom = 50;
let left = 50;
let i = 0;
let token1disc = false;
let drags = [];
const voiceover = new Audio ('assets/audio/piano.mp3');


// the black container should now appear from the middle
const showMask = () => {
    mask.style.width ='100vw';
    mask.style.height = '100vh';
    mask.style.top = 0;
    mask.style.left = 0;
}

// all of the images come up
const populate = () => {
    voiceover.play();
    // this tells the beep to stop from this point on
    played = true;
    // turn off painting
    paint = false;
    // show each image one after another a little spaced apart
    let imagePop = setInterval(() => {
        mask.innerHTML += `<img class="draggable d${i}" src="assets/images/token1/${images1[i]}" style="bottom: ${bottom}px; left: ${left}px;">`;
        drags.push(`img.draggable.d${i}`);
        i ++;
        bottom += 50;
        left += 50;
        if(i >=  images1.length - 1){
            clearInterval(imagePop);
            drags.forEach(drag => {
                new Draggabilly(drag);
            });
        };
    }, 150);
}

window.addEventListener('load', () => {
    placeholder1.addEventListener('mouseover', () => {
        if(!played){
            audio.play();
        }
    });

    token1.addEventListener('mouseover', () => {
        if(!played){
            token1.style.opacity = 1;
            setTimeout(() => {showMask()}, 1000);
            setTimeout(() => {populate(); }, 2000);
        }
    });

});

// at the end of the content everythin should be reset
voiceover.addEventListener('ended', () => {
    mask.style.width ='0';
    mask.style.height = '0';
    mask.style.top = '50vh';
    mask.style.left = '50vw';
    mask.innerHTML = '';
    // start painting again
    paint = true;
})


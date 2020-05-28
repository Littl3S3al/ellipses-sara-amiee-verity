const placeholder1 = document.querySelector('#placeholder1');
const token1 = document.querySelector('#token1');
const audio = new Audio('assets/audio/beep.wav');
let played = false;
const mask = document.querySelector('#mask');
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit arcu quam, a scelerisque metus sollicitudin quis. Mauris in neque aliquet, cursus tellus ut, ullamcorper sem. Cras eget elit rutrum, suscipit diam et, fermentum ante. Donec efficitur aliquam lectus eu egestas. Sed hendrerit mi id ante vehicula, sit amet faucibus ex laoreet. Sed et diam tincidunt, maximus nisl in, rutrum ipsum. Maecenas tempus in magna non finibus. Nam ac maximus tellus. Maecenas ultrices sapien dolor, et pharetra purus dapibus a. Vestibulum sed arcu gravida, posuere lorem eu, ullamcorper dui. Nam tristique, lorem et efficitur efficitur, risus dolor scelerisque orci, eu sollicitudin metus massa tincidunt sem. Praesent lobortis velit et lacus fringilla lobortis. In feugiat lectus in velit tincidunt eleifend. Curabitur mattis lorem quis tellus mattis tincidunt. Maecenas aliquam mauris id mattis porta. Pellentesque ornare iaculis dictum.Pellentesque varius semper sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras id consectetur tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In accumsan nulla vel sapien euismod ornare. Mauris sit amet orci vitae ante tincidunt dignissim id id risus. Donec iaculis odio vel neque placerat, sed lacinia ante finibus. Integer vitae porttitor enim. Integer gravida, lectus in hendrerit tincidunt, elit nisl faucibus nunc, finibus blandit ex nulla et neque. Proin tristique sem a ipsum pharetra, et tristique turpis porta. Quisque pretium tellus quis tempus euismod. Duis sit amet eros lectus. Sed consequat ante sit amet leo pulvinar, sed dignissim diam pretium.Nam egestas libero at velit fringilla auctor. Integer eget libero lorem. Integer vel orci et erat consectetur rutrum. Etiam aliquet arcu vel tempor placerat. Ut ut lorem quis arcu aliquam viverra id eget nisi. Aenean vulputate, eros vitae aliquam porta, ex quam tempus sem, in sagittis elit tellus vel nisl. Mauris ac mi congue, interdum lectus vel, vestibulum risus. Pellentesque in quam purus. Morbi sed vulputate velit.';
const images1 = ['<img src="assets/images/token1/bw-dump.jpg">', '<img src="assets/images/token1/carnival.jpg">', '<img src="assets/images/token1/casbah.jpg">', '<img src="assets/images/token1/choc-99.jpg"', `<p>${text}</p>`];
let bottom = 50;
let left = 50;
let i = 0;
let token1disc = false;
let drags = [];
const voiceover = new Audio ('assets/audio/piano.wav');
let draggables = false;


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
        mask.innerHTML += `<div class="draggable d${i}" style="bottom: ${bottom}px; left: ${left}px;" ondrop="drop(event)">${images1[i]}</div>`;
        drags.push(`div.draggable.d${i}`);
        i ++;
        bottom += 50;
        left += 50;
        if(i >=  images1.length){
            clearInterval(imagePop);
            drags.forEach(drag => {
                new Draggabilly(drag);
                draggables = true;
            });
        };
    }, 150);
}

window.addEventListener('load', () => {
    placeholder1.addEventListener('mouseover', () => {
        if(!played && start){
            audio.play();
        }
    });

    token1.addEventListener('mouseover', () => {
        if(!played && start){
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
let z = 200;


function onDragEnd( draggie ) {
    // compare movement
    var drag = draggie.dragPoint;
    var message;
    if ( drag.x === 0 && drag.y === 0 ) {
      message = 'click'
    } else {
      message = 'move'
    }
    console.log( message );
  }
     



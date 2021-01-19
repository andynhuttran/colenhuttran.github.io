
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let animationSelection = document.getElementById("animation");
let sizeSelection = document.getElementById("size");
let turboCheckbox = document.getElementById("turbo");
let textarea = document.getElementById("textarea");


let animationValue = animationSelection.value;
let isTurbo = turboCheckbox.checked;

let listAnimations = [""];
let speed = 250;
let intervalHandler = null;
let isPlaying = false;

startBtn.onclick = handlePlay;
stopBtn.onclick = handleStop;
animationSelection.onchange = handleAnimationChange;
turboCheckbox.onchange = handleTurboChange;
sizeSelection.onchange = handleSizeChange;


function handlePlay(){
    handleControl(true);
    draw(speed);
}

function draw(speedV){
    let startIndex = 0;
    let endIndex = listAnimations.length;

    if (intervalHandler != null){
        clearInterval(intervalHandler);
    }

    intervalHandler = setInterval(() => {
        if(startIndex == endIndex) {
            startIndex = 0;
        }
        textarea.value = listAnimations[startIndex++];
    }, speedV);
}


function handleStop(){
    clearInterval(intervalHandler);
    intervalHandler = null;

    // reset control
    handleControl(false);
    // reset text area, show all animation
    resetTextArea();
}

function handleAnimationChange(){
    animationValue = animationSelection.value;
    listAnimations = ANIMATIONS[animationValue].split("=====\n");
    textarea.value = listAnimations[0];
}

function handleTurboChange(){
    isTurbo = turboCheckbox.checked;
    if (isTurbo) {
        speed /= 5;
    }
    else {
        speed *= 5;
    }
    if (isPlaying) draw(speed);
}


function handleSizeChange(){
    textarea.style.fontSize = sizeSelection.value;
}

function resetTextArea(){
    textarea.value = ANIMATIONS[animationValue];
}

function handleControl(playing) {
    if (playing) { 
        startBtn.disabled = true;
        stopBtn.disabled = false;
        animationSelection.disabled = true;
        isPlaying = true;
    } 
    else {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        animationSelection.disabled = false;
        isPlaying = false;
    }
}


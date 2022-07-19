function doFirst() {
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    defaultBar = document.getElementById('defaultBar');
    barsize = parseInt(window.getComputedStyle(defaultBar).width);
    progress = document.getElementById('progress');

    playButton.addEventListener('click', playOrPause);
    defaultBar.addEventListener('click', clictedBar);


    // document.getElementById('fullButton').addEventListener('click', () => {
    //     myMovie.webkitEnterFullScreen();
    // });
}

function playOrPause() {
    if (!myMovie.paused && !myMovie.ended) {
        myMovie.pause();
        playButton.innerText = 'play'
        clearInterval(intervalUpdata);
    }
    else {
        myMovie.play()
        playButton.innerText = 'pause'
        intervalUpdata = setInterval(updata, 300);
    }
}
function updata() {
    if (!myMovie.paused && !myMovie.ended) {
        let size = barsize / myMovie.duration * myMovie.currentTime;
        progress.style.width = `${size}px`;
        // setTimeout(updata, 300);
        console.log(size);
    }
    else { // if (myMovie.ended)         
        progress.style.width = `0px`;
        myMovie.currentTime = 0;
        playButton.innerText = 'play';
        clearInterval(intervalUpdata);
    }
}
function clictedBar(e) {
    let mouseX = e.pageX - defaultBar.offsetLeft;
    progress.style.width = `${mouseX}px`;

    let newTime = mouseX / (barsize / myMovie.duration);
    myMovie.currentTime = newTime;
}

window.addEventListener('load', doFirst);
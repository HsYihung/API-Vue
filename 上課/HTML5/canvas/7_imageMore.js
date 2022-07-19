function doFirst() {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';    

    // getGrid(50);

    // let pic1 = new Image();
    // pic1.src = '../../images/cityscape.jpg';
    // pic1.addEventListener('load', () => {
    //     context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
    // })

    // let pic2 = new Image();
    // pic2.src = '../../images/Shinnosuke/Shinnosuke9.png';
    // pic2.addEventListener('load', () => {
    //     context.drawImage(pic2, 0, 0, 300, 300);
    //     context.drawImage(pic2, canvas.width - 300, 0, 300, 300);
    //     context.drawImage(pic2, 0, canvas.height - 300, 300, 300);
    //     context.drawImage(pic2, canvas.width - 300, canvas.height - 300, 300, 300);
    // })
    pic1 = new Image();
    pic1.src = '../../images/cityscape.jpg';
    pic1.addEventListener('load', loadImage);

    pic2 = new Image();
    pic2.src = '../../images/Shinnosuke/Shinnosuke9.png';
    pic2.addEventListener('load', loadImage);


    // context.moveTo(0, 100);
    // context.lineTo(1000, 50);
    // context.stroke();
}
function loadImage() {
    context.globalAlpha = 0.5;
    context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    context.drawImage(pic2, canvas.width - 300, canvas.height - 300, 300, 300);
}
function getGrid(count) {
    for (let i = 0; i < canvas.height / count; i++) {
        let interval = i * count;
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
    }
    for (let i = 0; i < canvas.width / count; i++) {
        let interval = i * count
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }

    context.strokeStyle = 'rgba(0,0,0,0.3)';
    context.stroke();
}

window.addEventListener('load', doFirst);

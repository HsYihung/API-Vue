function doFirst() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';
    let count = 50;
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

    let image = new Image();
    image.src = '../../images/cityscape.jpg';
    image.addEventListener('load', () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
    })

    // context.moveTo(0, 100);
    // context.lineTo(1000, 50);
    // context.stroke();
}

window.addEventListener('load', doFirst);

function doFirst() {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';    

    getGrid(50);

    canvas.addEventListener('mousemove', drawing)

}

function drawing(e) {
    context.strokeStyle = 'red';
    context.fillStyle = 'red';

    // context.fillRect(e.clientX, e.clientY, 5, 5);
    context.beginPath();
    context.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI);
    context.fill();


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

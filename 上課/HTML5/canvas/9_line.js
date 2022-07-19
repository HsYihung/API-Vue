function doFirst() {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';    

    getGrid(50);


    context.lineWidth = 20;
    context.strokeStyle = 'red';

    context.beginPath();
    context.lineCap = 'butt';
    context.moveTo(100, 100);
    context.lineTo(250, 100);
    context.stroke();

    context.beginPath();
    context.lineCap = 'round';
    context.moveTo(100, 150);
    context.lineTo(250, 150);
    context.stroke();

    context.beginPath();
    context.lineCap = 'square';
    context.moveTo(100, 200);
    context.lineTo(250, 200);
    context.stroke();

    context.lineJoin = 'miter';
    context.strokeRect(100, 300, 100, 150);

    context.lineJoin = 'round';
    context.strokeRect(300, 300, 100, 150);

    context.lineJoin = 'bevel';
    context.strokeRect(500, 300, 100, 150);


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

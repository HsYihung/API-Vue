function doFirst() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';
    context.fillStyle = 'red';
    context.strokeStyle = "blue";
    context.lineWidth = 5;

    context.moveTo(100, 100);
    context.lineTo(250, 250);
    context.lineTo(400, 50);
    context.lineTo(50, 200);
    context.closePath();

    context.stroke();
    context.fill();


}

window.addEventListener('load', doFirst);

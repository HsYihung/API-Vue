function doFirst() {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';    

    getGrid(50);

    let gradient = context.createRadialGradient(350, 250, 70, 280, 250, 180);

    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    // gradient.addColorStop(0.5, 'yellow');

    context.fillStyle = gradient;
    context.fillRect(100, 100, 500, 300);


    context.translate(250, 600);

    let r = 150
    let circleGradient = context.createRadialGradient(0, 0, r * .95, 0, 0, r * 1.05);
    circleGradient.addColorStop(0, '#666');
    circleGradient.addColorStop(0.5, '#fff');
    circleGradient.addColorStop(1, '#666');

    context.beginPath();
    context.strokeStyle = circleGradient;
    context.lineWidth = 20;
    context.arc(0, 0, 150, 0, 2 * Math.PI);
    context.stroke();

    context.translate(-250, -600);

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

function doFirst() {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';    

    getGrid(50);

    context.beginPath();
    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.moveTo(0, 400);
    context.lineTo(1000, 400);
    context.stroke();

    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(500, 800);
    context.stroke();




    context.font = 'bold 25px Courier New';
    context.strokeStyle = 'red';
    context.lineWidth = 5;


    context.fillText('arc()', 50, 50);
    context.beginPath();
    context.arc(250, 200, 150, 0, 0.3 * Math.PI, 1.6 * Math.PI,);
    context.stroke();


    context.fillText('arcto()', 550, 50);
    context.beginPath();
    context.moveTo(600, 250);
    context.arcTo(750, 100, 850, 300, 100);
    context.stroke();

    context.strokeStyle = 'blue';
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(600, 250);
    context.lineTo(750, 100);
    context.lineTo(850, 300);
    context.stroke();


    context.fillText('quadraticCurveTo()', 50, 550);
    context.beginPath();
    context.moveTo(100, 650);
    context.lineTo(250, 500);
    context.lineTo(350, 700);
    context.stroke();
    context.font = 'bold 25px Courier New';
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(100, 650);
    context.quadraticCurveTo(250, 500, 350, 700);
    context.stroke();

    // bezierCurveTo
    context.fillText('bezierCurveTo()', 550, 550);

    context.beginPath();
    context.moveTo(600, 650);
    context.bezierCurveTo(700, 500, 850, 800, 950, 700);
    context.stroke();

    context.strokeStyle = 'blue';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(600, 650);
    context.lineTo(700, 500);
    context.lineTo(850, 800);
    context.lineTo(950, 700);
    context.stroke();

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

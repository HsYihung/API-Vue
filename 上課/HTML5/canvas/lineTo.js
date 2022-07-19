function doFirst() {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    // context.strokeStyle = '#F5B841';    


    //格線
    getGrid(50);

    context.beginPath();




    //星型
    context.strokeStyle = 'rgba(0,0,0,1)';
    context.translate(500, 400);
    getStar(100, 300, 8);
    context.translate(-500, -400);
    context.beginPath();


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

function getStar(r1, r2, quantity) {

    let angle1 = Math.PI * 2 / quantity;
    let angle2 = angle1 / 2;

    for (let i = 0; i < quantity; i++) {
        context.lineTo(r1 * Math.cos(angle1 * i), r1 * Math.sin(angle1 * i));
        context.lineTo(r2 * Math.cos(angle1 * i + angle2), r2 * Math.sin(angle1 * i + angle2));
    }
    context.lineTo(r1, 0);

    context.stroke();

}

window.addEventListener('load', doFirst);

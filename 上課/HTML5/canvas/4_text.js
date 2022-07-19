function doFirst() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    // context.fillStyle = '#F5B841';
    context.strokeStyle = 'Blue';

    context.font = '50px Tahoma';
    // context.textBaseline = 'top | hanging | middle | alphabetic | ideographic | bottom';
    context.textBaseline = 'alphabetic';

    context.fillText('omgSilveia', 100, 100);

    context.moveTo(100, 100);
    context.lineTo(400, 100);
    context.stroke()

    context.shadowColor = 'red';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;

    context.fillText('omgSilveia', 100, 250);

    context.fillStyle = '#fff';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 10;
    context.fillText('omgSilveia', 100, 400);

    context.fillText('omgSilveia', 100, 550);
    context.shadowColor = 'blue';
    context.fillText('omgSilveia', 100, 550);

}

window.addEventListener('load', doFirst);

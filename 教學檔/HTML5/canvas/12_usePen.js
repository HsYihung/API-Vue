function doFirst() {
    // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線開始
    context.beginPath();
    for(let i = 0; i < 100; i++){
        let interval = i * 50
        // 水平
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        // 垂直
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();
    // =====

    canvas.addEventListener('mousemove', drawing)
}
function drawing(e){
    context.strokeStyle='red';
    context.fillStyle='red';
    
    // 矩形畫筆
    // context.strokeRect(e.clientX, e.clientY, 5, 5);

    // 圓形畫筆
    context.beginPath();    
    context.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI);
    // context.fill();
    context.stroke();    
}
window.addEventListener('load', doFirst)
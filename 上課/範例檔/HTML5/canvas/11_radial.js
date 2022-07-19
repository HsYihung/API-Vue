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

    let gradient = context.createRadialGradient(350, 250, 70, 280, 250, 180);
    
    gradient.addColorStop(  0, 'red');
    gradient.addColorStop(  1, 'blue');
    // gradient.addColorStop(0.5, 'yellow');
    
    // context.fillStyle='yellow';
    context.fillStyle=gradient;
    context.fillRect(100, 100, 500, 300); 
    
    // circle
    context.lineWidth=15;
    let radius = 150;

    context.translate(250, 600);   // 從此之後 (250, 600) ---> (0, 0)

    let circleGradient = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circleGradient.addColorStop(  0, '#666');
    circleGradient.addColorStop(0.5, '#fff');
    circleGradient.addColorStop(  1, '#666');

    context.strokeStyle=circleGradient;
    context.beginPath()
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.stroke();

    context.translate(-250, -600);
}
window.addEventListener('load', doFirst)
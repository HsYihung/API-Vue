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

    // 四分之一線
    context.strokeStyle='rgba(0,0,0,0.8)';

    context.beginPath();
    context.moveTo(0, 400);
    context.lineTo(1000, 400);
    context.stroke();

    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(500, 800);
    context.stroke();
    // =====

    context.font='bold 25px Courier New';
    context.strokeStyle='red';
    context.lineWidth=5;
    
    // arc
    context.fillText('arc()', 50, 50);
    context.beginPath();
    // context.arc(250, 200, 150, 0, Math.PI);
    // context.arc(250, 200, 150, 0, Math.PI, true);
    // context.arc(250, 200, 150, 0, 2 * Math.PI);
    context.arc(250, 200, 150, 0.3 * Math.PI, 1.6 * Math.PI);
    context.stroke();

    // arcTo
    context.fillText('arcTo()', 550, 50);
    context.beginPath();
    context.moveTo(600, 250);
    context.arcTo(750, 100, 850, 300, 100);
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(600, 250);
        context.lineTo(750, 100);
        context.lineTo(850, 300);
        context.stroke();  

    // quadraticCurveTo -- 貝茲二次曲線
    context.strokeStyle='red';
    context.lineWidth=5;
    context.fillText('quadraticCurveTo()', 50, 450);

    context.beginPath();
    context.moveTo(100, 650);
    context.quadraticCurveTo(250, 500, 350, 700);
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(100, 650);
        context.lineTo(250, 500);
        context.lineTo(350, 700);
        context.stroke();      
    
    // bezierCurveTo
    context.strokeStyle='red';
    context.lineWidth=5;
    context.fillText('bezierCurveTo()', 550, 450);

    context.beginPath();
    context.moveTo(600, 650);  // 起點
    // context.bezierCurveTo(700, 500, 850, 450, 950, 700);
    context.bezierCurveTo(700, 300, 850, 800, 950, 700);
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(600, 650);  // 起點
        // context.lineTo(700, 500);
        context.lineTo(700, 300);
        // context.lineTo(850, 450);
        context.lineTo(850, 800);
        context.lineTo(950, 700);  // 終點
        context.stroke(); 
}
window.addEventListener('load', doFirst)
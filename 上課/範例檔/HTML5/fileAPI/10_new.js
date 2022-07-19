function doFirst() {
    // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
    document.getElementById('theFile').onchange = fileChange
}
function fileChange(){
    let files = document.getElementById('theFile').files
    // console.log(files);
    let message = ''

    for(let i = 0; i < files.length; i++){
        message += `File name: ${files[i].name}\n`
        message += `File type: ${files[i].type}\n`
        message += `File size: ${files[i].size} byte\n`
        message += `Last Modified: ${files[i].lastModifiedDate}\n`
        message += `============================\n`
    }
    document.getElementById('fileInfo').value = message
}
window.addEventListener('load', doFirst)
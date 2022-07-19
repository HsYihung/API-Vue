function doFirst() {
    // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
    image = document.getElementById('image')
    image.addEventListener('dragstart', startDrag)
    image.addEventListener('dragend', endDrag)

    rightbox = document.getElementById('rightbox')
    // rightbox.addEventListener('dragenter',function(e){e.preventDefault()})
    rightbox.addEventListener('dragover',function(e){e.preventDefault()})
    rightbox.addEventListener('drop', dropped)
}
function startDrag(e){
    // let data = `<img src="../../images/Shinnosuke/Shinnosuke6.png">`
    let data = `<img src="${image.src}">`
    // e.dataTransfer.setData('image/png',data)
    e.dataTransfer.setData('Shinnosuke',data)
}
function endDrag(){
    // image.style.visibility = 'hidden'
    image.style.display = 'none'
}
function dropped(e){
    e.preventDefault()
    // rightbox.innerHTML = e.dataTransfer.getData('image/png')
    rightbox.innerHTML = e.dataTransfer.getData('Shinnosuke')
}
window.addEventListener('load', doFirst)
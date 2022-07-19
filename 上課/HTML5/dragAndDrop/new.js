function doFirst() {
    image = document.getElementById('image');
    image.addEventListener('dragstart', startDrag);
    image.addEventListener('dragend', endDrag);

    rightbox = document.getElementById('rightbox');
    // rightbox.addEventListener('dragenter', e => e.preventDefault());
    rightbox.addEventListener('dragleave', dragleave);
    rightbox.addEventListener('dragover', e => e.preventDefault());
    rightbox.addEventListener('drop', dropped);

    leftbox = document.getElementById('leftbox');
    leftbox.addEventListener('dragover', e => e.preventDefault());
    leftbox.addEventListener('dragleave', dragleave);
    leftbox.addEventListener('drop', dropped);


}
function startDrag(e) {
    // let data = `<img src="../../images/Shinnosuke/Shinnosuke6.png">`
    let data = `<img id='image' src="${image.src}">`
    e.dataTransfer.setData('Shinnosuke', data);
}
function endDrag() {

}
function dragleave(e) {
    e.preventDefault()
    e.target.innerHTML = '';
}
function dropped(e) {
    e.preventDefault();
    e.target.innerHTML = e.dataTransfer.getData('Shinnosuke');
    image = document.getElementById('image');
    image.addEventListener('dragstart', startDrag);
    image.addEventListener('dragend', endDrag);

}

window.addEventListener('load', doFirst);
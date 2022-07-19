function doFirst() {
    document.getElementById('dropzone').ondragover = dragOver;
    document.getElementById('dropzone').ondrop = dropped;
}

function dragOver(e) {
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault();
    let files = e.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
        let readFile = new FileReader();
        readFile.readAsDataURL(files[i]);
        readFile.addEventListener('load', function () {
            let image = document.createElement('img');
            image.src = readFile.result;
            document.getElementById('dropzone').appendChild(image);
        })

    }

}

window.addEventListener('load', doFirst);
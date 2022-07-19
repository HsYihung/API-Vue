function doFirst() {
    document.getElementById('dropzone').ondragover = dragOver;
    document.getElementById('dropzone').ondrop = dropped;
}

function dragOver(e) {
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault()

    let file = e.dataTransfer.files[0]
    // console.log(file);
    document.getElementById('fileName').innerText = file.name

    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function () {
        document.getElementById('myMovie').src = readFile.result
        document.getElementById('myMovie').controls = true
    })
}

window.addEventListener('load', doFirst);
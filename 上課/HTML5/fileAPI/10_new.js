function doFirst() {
    theFile = document.getElementById('theFile')
    theFile.onchange = fileChange;
}
function fileChange() {
    let files = theFile.files;
    console.log(files);
    let message = '';
    for (let e in files) {
        message += `File name: ${files[e].name}\n`
        message += `File type: ${files[e].type}\n`
        message += `File size: ${files[e].size} byte\n`
        message += `Last Modified: ${files[e].lastModifiedDate}\n`
    }
    document.getElementById('fileInfo').value = message;
}
window.addEventListener('load', doFirst);
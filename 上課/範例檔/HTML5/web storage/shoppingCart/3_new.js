let storage = localStorage;
function doFirst(){

    // 幫每個 Add Cart 建立事件聆聽功能
    let list = document.querySelectorAll('.addButton');  // list 是陣列
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',function(e){
            // alert(e.target.id)  // alert(this.id)
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value
            addItem(e.target.id, teddyInfo)
        })
    }
}
function addItem(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    let image = document.createElement('img')
    image.src = 'imgs/' + itemValue.split('|')[1]

    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0]

    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2]

    let newItem = document.getElementById('newItem')
    // 先判斷此處是否已有物件，如果有要先刪除
    // alert(newItem.childNodes.length)

    while(newItem.childNodes.length >= 1){
        newItem.removeChild(newItem.firstChild)
    }

    // 再顯示新物件
    newItem.appendChild(image)
    newItem.appendChild(title)
    newItem.appendChild(price)
}
window.addEventListener('load', doFirst);


// 字串切割成陣列: 字串.split(delimeter)
// 陣列組合成字串: 陣列.join(delimeter)
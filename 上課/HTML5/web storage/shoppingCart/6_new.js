let storage = localStorage;
function doFirst() {
    let itemString = storage['addItemList'];
    let items = itemString.split(', ');
    items.pop();

    newDiv = document.createElement('div');
    newTable = document.createElement('table');

    newDiv.appendChild(newTable)
    document.getElementById('cartList').appendChild(newDiv);

    total = 0
    items.forEach(element => {
        let itemInfo = storage.getItem(element).split("|")
        itemInfo[2] = parseInt(itemInfo[2]);
        careateCartList(element, itemInfo)
        total += itemInfo[2]
    });
    document.getElementById('total').innerHTML = total
}

function careateCartList(itemId, itemValue) {
    //
    console.log(itemId, itemValue)
    let itemTitle = itemValue[0]
    let itemImage = 'imgs/' + itemValue[1]
    let itemPrice = itemValue[2]


    //
    let trItemList = document.createElement('tr')
    trItemList.className = 'item'


    let tdIamge = document.createElement('td')
    tdIamge.style.width = '200px'
    let image = document.createElement('img')
    image.src = itemImage
    image.width = 80
    tdIamge.appendChild(image);
    trItemList.appendChild(tdIamge);


    let tdTitle = document.createElement('td')
    tdTitle.style.width = '280px'
    tdTitle.id = itemId
    let pTitle = document.createElement('p');
    pTitle.innerHTML = itemTitle;
    let delButton = document.createElement('button')
    delButton.innerText = 'Delete'
    delButton.addEventListener('click', deleteItem)
    tdTitle.appendChild(pTitle)
    tdTitle.appendChild(delButton)
    trItemList.appendChild(tdTitle)


    let tdPrice = document.createElement('td')
    tdPrice.style.width = '170px'
    let pPrice = document.createElement('p')
    pPrice.innerText = itemPrice
    tdPrice.appendChild(pPrice)
    trItemList.appendChild(tdPrice)

    let tdItemCount = document.createElement('td');
    tdItemCount.style.width = '60px'
    let pItemCount = document.createElement('p')
    let inputItemCount = document.createElement('input');
    inputItemCount.type = 'number';
    inputItemCount.value = 1;
    inputItemCount.min = 1;
    inputItemCount.addEventListener('input', changeItemCount)

    pItemCount.appendChild(inputItemCount);
    tdItemCount.appendChild(pItemCount);
    trItemList.appendChild(tdItemCount);

    newTable.appendChild(trItemList);
    //
}
function deleteItem(e) {
    let itemId = e.target.parentNode.id;
    let itemValue = storage.getItem(itemId);
    total -= parseInt(itemValue.split('|')[2]);

    storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `, '')
    storage.removeItem(itemId);
    // console.log(storage['addItemList']);
    // console.log(storage[itemId])

    document.getElementById('total').innerHTML = total

    newTable.removeChild(e.target.parentNode.parentNode);

}
function changeItemCount(e) {
    console.log(e.target.value)
}

window.addEventListener('load', doFirst);
let storage = localStorage;
function doFirst() {
    let list = document.querySelectorAll('.addButton');
    if (storage['addItemList'] == null) {
        storage['addItemList'] = ''
    }
    list.forEach(
        (el) => {
            el.addEventListener('click', function (e) {
                let teddyInfo = document.querySelector(`#${e.target.id} input`).value;
                addItem(e.target.id, teddyInfo);
            })
        }
    )
}
function addItem(itemId, itemValue) {
    let valueAry = itemValue.split('|')
    let image = document.createElement('img');

    image.src = `imgs/${valueAry[1]}`;

    let title = document.createElement('span');
    title.innerText = valueAry[0];

    let price = document.createElement('span');
    price.innerText = `Price : $${valueAry[2]}`;

    let newItem = document.getElementById('newItem');

    while (newItem.childNodes.length >= 1) {
        newItem.removeChild(newItem.firstChild);
    }

    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(price);

    if (storage[itemId]) {
        alert('You have checked.')
    }
    else {
        storage['addItemList'] += `${itemId}, `
        storage.setItem(itemId, itemValue);
    }

    let itemString = storage['addItemList'];
    let items = itemString.split(', ');
    items.pop();
    // console.log(items);

    let subtotal = 0
    items.forEach(data => {
        subtotal += Number((storage.getItem(data).split("|"))[2])
    })
    // console.log(subtotal)
    document.getElementById('itemCount').innerText = items.length
    document.getElementById('subtotal').innerText = subtotal
}

window.addEventListener('load', doFirst);
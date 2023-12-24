let basketItems = {}
let totalSpan

function init() {
    totalSpan = document.getElementById('total')
}

function addBasket(productName, price) {

    if (basketItems[productName]){

        basketItems[productName].quantity++

    } else{
        basketItems[productName] = {price, quantity: 1}
    }

    console.log("testing", price);


    updateBasket()
    
}

function updateBasket() {
    const basketList = document.getElementById('basketList')
    basketList.innerHTML = ""

    let total = 0

    for(const [productName, item] of Object.entries(basketItems)){
        const listItem = document.createElement("li")
        listItem.textContent = `${productName} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
        basketList.appendChild(listItem)

        total += item.price * item.quantity

    }
    totalSpan.textContent = total.toFixed(2)

}

function checkout() {
    alert("Thanks for your purchase")
}


init()
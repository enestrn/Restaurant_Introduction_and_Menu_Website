let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Meksika Bowl',
        image: '1.PNG',
        price: 400.0
    },
    {
        id: 2,
        name: 'Acılı Kanat',
        image: '2.PNG',
        price: 350.0
    },
    {
        id: 3,
        name: 'Somon Balıklı Mevsim Salata',
        image: '3.PNG',
        price: 340.0
    },
    {
        id: 4,
        name: 'Hint Usulü Çorba',
        image: '4.PNG',
        price: 270.0
    },
    {
        id: 5,
        name: 'Roka Salatası',
        image: '5.PNG',
        price: 220.0
    },
    {
        id: 6,
        name: 'Pizza 1',
        image: '6.PNG',
        price: 300.0
    },
    {
        id: 7,
        name: 'Pizza 2',
        image: 'f3.PNG',
        price: 300.0
    },
    {
        id: 8,
        name: 'Pizza 3',
        image: 'f6.PNG',
        price: 300.0
    },
    {
        id: 9,
        name: 'Patates Kızartması',
        image: 'f5.PNG',
        price: 200.0
    },
    {
        id: 10,
        name: 'Hamburger 1',
        image: 'f7.PNG',
        price: 330.0
    },
    {
        id: 11,
        name: 'Hamburger 2',
        image: 'f8.PNG',
        price: 330.0
    },
    {
        id: 12,
        name: 'Hamburger 3',
        image: 'klasikburger.PNG',
        price: 330.0
    },
    {
        id: 13,
        name: 'Hamburger 4',
        image: 'mantarburger.jpg',
        price: 330.0
    },
    {
        id: 14,
        name: 'Makarna 1',
        image: 'f4.PNG',
        price: 330.0
    },
    {
        id: 15,
        name: 'Makarna 2',
        image: 'f9.PNG',
        price: 330.0
    },
    {
        id: 16,
        name: 'Makarna 3',
        image: 'makarna.PNG',
        price: 330.0
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="sepeteEkle(${key})">Sepete Ekle</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function sepeteEkle(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    sepettenKaldir();
}
function sepettenKaldir(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    sepettenKaldir();
}
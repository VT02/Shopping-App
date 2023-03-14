const ham = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(ham){
    ham.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

var removeCartItem = document.getElementsByClassName('fa-circle-xmark');
console.log(removeCartItem);
for(var i=0; i<removeCartItem.length; i++){
    var btn = removeCartItem[i];
    btn.addEventListener('click', function(event){
        var btnClicked = event.target
        btnClicked.parentElement.parentElement.parentElement.remove();
        updateCartTotal()
    })
}

function updateCartTotal(){
    var cartItemContainer = document.getElementById
}
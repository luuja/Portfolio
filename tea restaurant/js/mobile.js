
  // Run fade-in animation when loaded
(function(){
	document.body.onload=function(){
		document.body.classList.add('loaded');
	};
	document.querySelectorAll("img").forEach(img=>{
		img.ondragstart = function(){
            return false;
        }
	})

	let cart = {};

	checkCart();
	showMiniCart();

	document.querySelectorAll('button.cart').forEach(btn=>{
		btn.onclick = function addToCart(){ //добавление товара в корзину
			let articul = btn.dataset.id;
			if (cart[articul]!=undefined){
				cart[articul]++;
			}
			else {
				cart[articul] = 1;
			}
			localStorage.setItem('cart', JSON.stringify(cart));
			//console.log(cart);
			showMiniCart();
		};
	});

	function checkCart(){
		//проверка наличия корзины в localStorage
		if (localStorage.getItem('cart') != null) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
	}

	function showMiniCart(){
		// показывает содержимое корзины
		var out = '';
		for (var w in cart){
			out += w + ' -- ' + cart[w] + '<br>'
		}
		document.querySelector('#mini-cart').innerHTML = out;
	}

})()


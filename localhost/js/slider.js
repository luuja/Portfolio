var height = $('.wrapper').height(),
	$slider = $('.slider');

$('img.up').click(nextSlide);
$('img.down').click(prevSlide);

function nextSlide(){
	$slider.css('transform','translate(35%,'+ height +'px)');
}

function prevSlide(){
	$slider.css('transform','translate(35%,'+ (-height) +'px)');
}

$slider.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
	$slider.css('transition','none');
    var $first = $('.item').get(0);
    $first.remove();
    $slider.append($first);
    $slider.css('transform','translate(35%, 0.5%)');
   
   
    setTimeout(function(){
        $slider.css('transition','');
    })
});


















// var array = document.getElementsByClassName('item');
// let offset = -window.innerWidth * 0.01;
// const _OFFSET = window.innerWidth * 1.2;
// const firstItem = document.querySelector("div.item");
// var num = 1;
// var parentDiv = document.getElementsByClassName('slider');
// var reference = document.getElementsByClassName('void');

// document.body.style.setProperty('--translateX', `${offset}px`);  

// function next() {
	
// 	console.log(num);
// 	if (num == array.length) {
// 		parentDiv[0].insertBefore(array[0], reference[0]);
// 		num--;
// 		offset += _OFFSET;
// 	    document.body.style.setProperty('--translateX', `${offset}px`); 
// 	}
// 	num++;
// 	offset -= _OFFSET;
// 	document.body.style.setProperty('--translateX', `${offset}px`);
// }

// function prev() {
// 	num--;

//     offset += _OFFSET;
//     document.body.style.setProperty('--translateX', `${offset}px`);  
// }
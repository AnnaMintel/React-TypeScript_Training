 // event
 // function - подписчик, слушатель, обработчик (subscriber, listener, handler)
 // Сгенерированный браузером объект особого типа -> e, ev, event
 // e.currentTarget - элемент, который вызвал обработчик (в процессе всплытия)
 // e.target - элемент, который сгенерировал событие (первый получил клик)

 function onClickHandler(e) {
    console.log(e.currentTarget);
    e.stopPropagation();
    alert("sq1");
 }
 function onClickHandler1(e) {
    console.log(e.currentTarget);
    e.stopPropagation(); //preventDefault()
    alert("sq2");ы
 }
 function onClickHandler2(e) {
    console.log(e.currentTarget);
    e.stopPropagation();
    alert("sq3");
 }

 const small = document.getElementById("small");
 const medium = document.getElementById("medium");
 const big = document.getElementById("big")
;
 small.onclick = onClickHandler;
 medium.onclick = onClickHandler1;
 big.onclick = onClickHandler2;

 // удалить обработчик события:
//  small.onclick = null;
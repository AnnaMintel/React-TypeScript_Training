 // event
 // function - подписчик, слушатель, обработчик (subscriber, listener, handler)
 // Сгенерированный браузером объект особого типа -> e, ev, event


 function onClickHandler(e) {
    console.log(e.currentTarget);
    e.stopPropagation();
    alert("sq1");
 }
 function onClickHandler1(e) {
    console.log(e.currentTarget);
    e.stopPropagation(); //preventDefault()
    alert("sq2");
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
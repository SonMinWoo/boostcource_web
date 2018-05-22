//밑 함수에서 function을 event 핸들러라고 한다. "click" 이 일어났을때, function을 실행하는 것이다.
var el = document.getElementById("outside");
el.addEventListener("click", function(){
//do something..
}, false);

//keydown, keypress, keyup등의 event도 있다.
//mousemove, mouseenter등의 여러가지 mouse event가 있다.

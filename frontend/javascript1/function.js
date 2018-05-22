// 함수의 호출.
function printName(firstname) {
    var myname = "jisu";
    return myname + " ," +  firstname;
}

function run(firstname) {
   var firstname = firstname || "Youn";
   var result = printName(firstname);
   console.log(result);
}
//함수 호출 스택을 이해해야 한다.
//자바스크립트의 함수 호출 스택은 다른 언어와 같다.
//디버깅을 하는 방법을 이해하자.
//callstack 을 너무 쌓지 말자.

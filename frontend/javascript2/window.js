//window 객체
window.setTimeout()
setTimeout() //window는 전역객체라서 생략 가능하다.

//비동기 예제, 콜백함수(비동기 함수) stack이 다 비워지고 나서 event queue에 보관되다 마지막에 실행된다.

function run1() {
    setTimeout(function() { // 인자로 함수를 받고 있고, 즉시 실행되지 않고 나중에 실행된다. -> 콜백함수
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 1000);
}

function run2() {
    console.log("start");
    setTimeout(function() {
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 1000);
    console.log("end");
}

function run3() {

    setTimeout(function() {
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 2000);
    console.log("run func end");
}
console.log("start");
run3();
console.log("end");
// start -> run func end -> end -> hello codesquad 와 같은 순서로 실행된다.

//setinterval -> 일정시간마다 반복실행하는 함수
function run4(){
    setInterval(function() {
       alert('haha');
    }, 3000);
}

//위와 같이 사용

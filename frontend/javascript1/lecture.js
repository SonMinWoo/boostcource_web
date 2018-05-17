// 함수의 호출.
function printName(firstname) {
    var myname = "jisu";
    return myname + " " +  firstname;
}

console.log(printName());
//매개변수와 인자값의 개수가 match하지 않아도 오류를 출력하지 않는다!
//값이 할당이 되어 있지 않으면 undefined를 출력
//hoisting : 함수 및 변수는 선언한 내용이 제일 우선적으로 반영된다. 할당 내용은 나중에 할당된다.
//return 값이 없을 때는 undefined를 반환한다.

function test1() {
    console.log(printName());
    var printName = function() {
        return 'anonymouse';
    }
}
test1()
//이 함수에서 undefined를 반환한다. but

function test2() {
    console.log(printName());
    function printName() {
        return 'anonymouse';
    }
}
test2()
//이 함수에서는 anonymouse를 반환한다.

//arguments
function a() {
 console.log(arguments);
}
a(1,2,3);

function b(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
}
b(1,2,3);

function c() {
 console.log('my name is ', arguments[2]);
}
c(1,2,'minwoo');
//너무 무분별한 arguments의 사용은 하지 말자! 그리고 수정하려고 하지 말자!

//arrow 함수
function getName(name) {
   return "Kim " + name ;
}
//위 함수는 아래 arrow함수와 같다.
var getName = (name) => "Kim " + name;

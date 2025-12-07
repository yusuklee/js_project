/**
 * this
 * 
 * JS 는 Lexical scope를 사용하기때문에 함수의 상위 스코프가 정의 시점에 평가된다
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.. 먼개소리일까
 */

const testFunction=function(){
    return this;
}
console.log(testFunction())
console.log(testFunction()===global)

const yujin = {
    name:"안유진",
    year:2003,
    sayHello: function(){
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

console.log(yujin.sayHello())

function Person(name,year){
    this.name = name;
    this.year = year;

    this.sayHello=function(){
        return `안녕하세요 ${this.name} 입니다.`
    }
}
const yujin2 = new Person('안유진',2003);
console.log(yujin2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을 춥니다.`
    }

    return dance2();
}
console.log(yujin2.dance());


/**
 * this 키워드가 가리키는거
 * 1. 일반 함수 호출할땐 this 가 최상위객체 global을 가리킨다
 * 2. 메서드로 호출할땐 객체를 가리킨다
 * 3 new 키워드로 사용해서 객체를 생성했을떄는 객체를 가리킨다.
 * 즉 메서드나 new 일때만 객체가리키고 나머지는 global을 가리킨다고 보면된다
 */
/**
 * 1)apply
 * 2) call
 * 3) bind
 */

function returnName(){
    return this.name;
}
console.log(returnName())

const yujin3 = {
    name:'안유진',
}
console.log(returnName.call(yujin3))
console.log(returnName.apply(yujin3))

/**
 * call -> 컴마를 기반으로 인자를 순서대로 넘겨주고
 * apply 인자를 리스트로 입력해야한다
 */

function multiply(x,y,z){
    return `${this.name} /결과값 :${x*y*z}`
}

console.log(multiply.call(yujin3,3,4,5))
console.log(multiply.apply(yujin3,[3,4,5]))

const laterFunc = multiply.bind(yujin3, 3,4,5); //bind는 this가 고정된 새함수 생성
console.log(laterFunc());






/**
 * Closure
 * A closure is the combination of a function and the lexical environment within which that function was declared
 * 
 * 클로저는 함수와 환경의 조합이다
 * 상위함수보다 하위함수가 더오래 살아있는경우를 closure 라고 한다
 */
// function getNumber(){
//     var number =5;
//     function innerGetnumber(){
//         return number
//     }

//     return innerGetnumber();
// }

// console.log(getNumber());

function getNumber(){
    var number =5;
    function innerGetnumber(){
        return number;
    }
    return innerGetnumber;
}

const runner = getNumber();

console.log(runner)
console.log(runner())

function cacheFunction(newNumber){
    var number = 10*10;

    function innerCacheFunction(newNumber){
        return number * newNumber
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10))
console.log(runner2(20))

function cacheFunction2(){
    var number = 99;

    function increment(){
        number++;
        return number;
    }
    return increment
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3())

/**
 * 정보 은닉
 * 
 */
function Idol(name, year){
    this.name =name;
    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다 ${_year}에 태어났습니다.`;
    }
}

const yujin = new Idol('안유진',2003);
console.log(yujin.sayNameAndYear());

console.log(yujin._year);
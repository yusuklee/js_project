/**
 * Prototype
 */
const testObj = {};

// __proto__ 는 모든 객체에 존재하는 속성이다
//class 강의에서 배울때 상속에서 부모클래스에 해당하는값이다.. 뭔개소리야
console.log(testObj.__proto__);

function IdolModel(n,y){
    this.name = n;
    this.year =y;
}

console.log(IdolModel.prototype)
// console.dir(IdolModel.prototype,{
//     showHidden:true,
// })
 
let a=Function.__proto__ === Function.prototype 
function IdolModel2(name,year){
    this.name =name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name} 이 인사를합니다.`
    }
}

const yujin2 = new IdolModel2('안유잔',2003);
const wonyoung2 = new IdolModel2('장원영',2002);

console.log(yujin2.sayHello())
console.log(wonyoung2.sayHello())
console.log(yujin2.sayHello===wonyoung2.sayHello);

/**
 * Overriding
 * 
 */
function IdolModel4(name,year){
    this.name =name;
    this.year =year;

    this.sayHello = function(){
        return '나는 객체 메서드임'
    }
}
IdolModel4.prototype.sayHello = function(){
    return '안녕 프로 메서드임'
}

const yujin4 = new IdolModel4('안유진',20003);
console.log(yujin4.sayHello());

/**
 * getprototypeof, setprototypeof
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name,year){
    this.name = name;
    this.year =year;
}

IdolModel.prototype.sayHello = function(){
    return `${this.name} 인사를 합니다.`
}

function FemaleIdolModel(name,year){
    this.name = name;
    this.year =year;
    
    this.dance = function(){
        return `${this.name}가 춤을춥니다.`
    }
    
}


const gaEul = new IdolModel('가을',2004);
const ray =new FemaleIdolModel('레이',2003);

console.log(gaEul.__proto__)
console.log(gaEul.__proto__===IdolModel.prototype)
console.log(Object.getPrototypeOf(gaEul)===IdolModel.prototype)

console.log(gaEul.sayHello());
console.log(ray.dance())

ray.__proto__ = IdolModel.prototype;
console.log(ray.sayHello())

console.log(ray.constructor===FemaleIdolModel);
console.log(ray.constructor===IdolModel);

console.log(gaEul.constructor===IdolModel);
console.log(Object.getPrototypeOf(ray)===FemaleIdolModel.prototype)

console.log(FemaleIdolModel.prototype ===IdolModel.prototype);


FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서',2007);
console.log(Object.getPrototypeOf(eSeo)===FemaleIdolModel.prototype)
console.log(FemaleIdolModel.prototype===IdolModel.prototype);






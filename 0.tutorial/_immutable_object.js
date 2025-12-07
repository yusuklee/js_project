/**
 * extensible 
 */
yujin = {
    name:'안유진',
    year:'2003'
}
console.log(Object.isExtensible(yujin))
Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin))

yujin['groupName']='아이브';
console.log(yujin['groupName'])
delete yujin['name']
console.log(yujin)

/**
 * Seal
 * 
 */

const yujin2 = {
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear()-this.year;
    },

    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}

console.log(yujin2)
console.log(Object.isSealed(yujin2))
Object.seal(yujin2)
yujin2['groupName']='아이브';
console.log(yujin2);

delete yujin2['name'];
console.log(yujin2);

Object.defineProperty(yujin2,'name',{
    value:'코드 팩토리',
});
console.log(Object.getOwnPropertyDescriptor(yujin2,'name'));

/**
 * freezed
 * 읽기 외에 모든기능을 불가능하게한다   
 */

const yujin3 = {
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear()-this.year;
    },

    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}
console.log(Object.isFrozen(yujin3))


Object.freeze(yujin3);
console.log(yujin3)
delete yujin3['name']
console.log(yujin3)
const yujin4 = {
    name:'안유진',
    year:2003,
    wonYoung:{
        name:'장원영',
        year:2002,
    },
}
Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4))

console.log(Object.isFrozen(yujin4['wonYoung'])) //하위 오브젝트까지 freeze 되는건 아니다
// extensible seal freeze 3개
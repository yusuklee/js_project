/**
 * propery attribute
 * 
 * 객체 생성시 안에들어가는값들이
 * 1) 데이터 프로퍼티 - 키와 값을로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고있지 않지만 다른값을 가져오거나 설정할때 호출되ㅡㄴ 하숨
 */
const yujin = {
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear()-this.year
    },
    
    set age(age){
        this.year =new Date().getFullYear()-age
    }
}



Object.defineProperty(yujin,'height',{
    value:172,

    // writable:false,
    // enumerable:true,
    // configurable:true,
})

console.log(Object.keys(yujin))
Object.defineProperty(yujin,'height',{
    enumerable:true,
});

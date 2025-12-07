/**
 * using function to create objects
 */

function IdolModel(name, year){
    if(!new.target){
        return new IdolModel(name,year);
    }
    this.name = name;
    this.year =year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yujin = new IdolModel('안유진', 2003) ;
console.log(yujin.dance());
const yujin2 = IdolModel('안유진',2003);
console.log(yujin2);

const IdolModelArrow =(name,year)=>{
    this.name = name;
    this.year = year;
}
const yujin3 = new IdolModelArrow('안유진',2003);
/**
 * async theory
 */

function longWork(){
    setTimeout(()=>{
        console.log('완료');
    },2000);
}

console.log('hello')
longWork();
console.log('world')
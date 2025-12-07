// set initial count 초기값 만들라는거자나
let count = 0;

//select value and buttons
const value = document.querySelector('#value')

const btns = document.querySelectorAll(".btn") //클래스가 btn 다 가져오기

console.log(btns);

btns.forEach(function(btn){
btn.addEventListener('click',function(e){
const styles = e.currentTarget.classList;
if(styles.contains('decrease')){
    count--;
}else if(styles.contains('increase')){
    count++;
}else{
    count =0;
}


if(count>0){
    value.style.color = 'red';
}else if(count<0){
    value.style.color='blue';
}else{
    value.style.color='black'
}
value.textContent = count

})

})

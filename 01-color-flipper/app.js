const colors = ['green','red','rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color'); //클래스가 color인애를 가져오겟다는의미

btn.addEventListener('click',function(){
    //get random number between 0~3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    

    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
//using selectors inside the element
//traversing the dom

// const questionBtns = document.querySelectorAll('.question-btn');
// questionBtns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
        
//     })
// });

//using selector inside the element

const questions = document.querySelectorAll('.question');
questions.forEach(function(q){
    const btn = q.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        q.classList.toggle('show-text');
    })
})
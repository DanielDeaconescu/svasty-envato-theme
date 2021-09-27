const questionItems = document.querySelectorAll('.item');
const questionAnswers = document.querySelectorAll('.answer');
const plusSigns = document.querySelectorAll('.plus-sign');

for(let i = 0; i < questionItems.length; i++) {
    questionItems[i].addEventListener('click', function(){
        questionAnswers[i].classList.toggle('display-none');
        plusSigns[i].classList.toggle('rotate-45deg');
    })
}
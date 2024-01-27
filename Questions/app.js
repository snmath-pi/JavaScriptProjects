const qsnBtn = document.querySelectorAll('.question-btn')
const qsnText = document.querySelector('.question-text')

qsnBtn.forEach(item => {
    item.addEventListener('click', function(e){
        const qtn = (e.currentTarget.parentElement.parentElement);
        qtn.classList.toggle('show-text')
    });
});
const questions = [
    {
        question: "Uth pahad ke neeche ya pahad ke neeche uth?",
        answers: [
        
                {text: "Pagal hain kya?", correct: false},
                {text: "Uth", correct: false},
                {text: "Pahad", correct: false},
                {text: "Pahad ke upar Uth, Uth ke upar John Cena", correct: true},
                
        ]
    },
    {
        question: "Is Question ka Answer kya hai??",
        answers: [
        
                {text: "Main kyu batao?", correct: false},
                {text: "Hatt", correct: false},
                {text: "Answer", correct: false},
                {text: "Moye Moye", correct: true},
                
        ]
    }, 
    {
        question: "69 + 41?",
        answers: [
        
                {text: "100", correct: true},
                {text: "101", correct: true},
                {text: "69", correct: true},
                {text: "420", correct: true},
                
        ]
    },
    {
        question: "You have made it to the end congratulations?",
        answers: [
        
                {text: "Don't click me", correct: false},
                {text: "Don't click me", correct: false},
                {text: "Mujhe daba himmat hain toh", correct: true},
                {text: "Don't click me", correct: false},
                
        ]
    }
];


const questionElement = document.getElementById('Question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');


let currentQuestionIndex = 0;

let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {


    DESTROYEVERYTHING();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score++;

    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display ='block';
}
startQuiz();

function DESTROYEVERYTHING() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function showScore() {
    DESTROYEVERYTHING();
    questionElement.innerHTML = `Bhai kya baat hai tera score hai ${score} out of ${questions.length}`
    nextButton.innerHTML = 'Pher kheloge kya sir?';
    nextButton.style.display = 'block';
}
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

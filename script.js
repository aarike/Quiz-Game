const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionCounter = document.getElementById('questionCounter')
const score = document.getElementById('score')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random( - .5))
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}



function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)

    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children). forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')

    } else {
        endButton.innerText = 'End'
        endButton.classList.remove('hide')
    }
    

}
function setStatusClass(element, correct) {
    clearStatusClass(element) 
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')


}


const questions = [
    {
        question: 'What year was the very first model of the iPhone released?',
        answers: [
            {text: '2007', correct: true},
            {text: '2005', correct: false},
            {text: '2006', correct: false},
            {text: '2008', correct: false},
        ]
    },
    {
        question: 'What was Twitter’s original name?',
        answers: [
            {text: 'twter', correct: false},
            {text: 'twitr', correct: false},
            {text: 'twiir', correct: false},
            {text: 'twttr', correct: true},
            
        ]
    },
    {
        question: 'What’s the shortcut for the “paste” function on most computers?',
        answers: [
            {text: 'ctrl C', correct: false},
            {text: 'ctrl P', correct: false},
            {text: 'ctrl S', correct: false},
            {text: 'ctrl V', correct: true},
        ]
    },
    {
        question: ' Which email service is owned by Microsoft?',
        answers: [
            {text: 'Gmail', correct: false},
            {text: 'Hotmail', correct: true},
            {text: 'Yahoomail', correct: false},
            
        ],
    },
    {
        question: 'What does “HTTP” stand for?',
        answers: [
            {text: 'HyperText Timer Protocol', correct: false},
            {text: 'HyperLink Transfer Protocol', correct: false},
            {text: 'HyperText Transfer Protocol', correct: true},
            {text: 'HyperText Transfer Paste', correct: false},
        ]
    },
]

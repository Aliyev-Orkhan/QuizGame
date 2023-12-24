
const questions = [
    {
        question: 'Yaponyanın Paytaxtı?',
        answers: ['Pekin', 'Tokio', 'Şanxay', 'Seul'],
        correctAnswer: 'Tokio',
    },
    {
        question: 'Dünyanın ən kiçik ölkəsi?',
        answers: ['Moldova', 'Latviya', 'İsvec', 'Vatikan'],
        correctAnswer: 'Vatikan',
    },
    {
        question: '"Windows"un ilk versiyası necənci ilde cıxmışdır? Özüdə "MS-DOS" üçün qrafik əməliyyat sistemi qabığı kimi buraxılmışdır',
        answers: ['1978', '1985', '1982', '1986'],
        correctAnswer: '1985',
    },
    {
        question: '"Romeo və Juliet" əsərini kim yazmışdır?',
        answers: ['Çarlz Dikkens', 'Ceyn Osten', 'Uilyam Şekspir', 'Mark Tven'],
        correctAnswer: 'Uilyam Şekspir',
    },
    {
        question: `Xocalı soyqrımı 1992 ci ilin hansi ayının günündə baş vermişdir?`,
        answers: ["20 Yanvar", "24 Fevral", "26 Fevral", "31 Mart"],
        correctAnswer: "26 Fevral"
    }
];



const qTitleElement = document.getElementById('qTitle');
const btnGroupElement = document.getElementById('btnGroup');
const progressLineElement = document.getElementById('progresLine');
const pointDisplayElement = document.querySelector('.display-5');


let currentQuestionIndex = 0;
let userPoints = 0;


function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];


        qTitleElement.textContent = currentQuestion.question;


        btnGroupElement.innerHTML = '';
        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-light');
            button.textContent = answer;
            button.addEventListener('click', () => checkAnswer(answer));
            btnGroupElement.appendChild(button);
        });
    } else {

        qTitleElement.textContent = 'Oyun Bitdi';
        btnGroupElement.innerHTML = `<p class="text-white">Sizin Topladığınız Xal: ${userPoints * 20}</p>`;
    }
}


function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        userPoints++;
    }


    currentQuestionIndex++;


    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    progressLineElement.style.width = `${progressPercentage}%`;


    pointDisplayElement.textContent = `Xal: ${userPoints * 20}`;


    updateQuestion();
}

updateQuestion();

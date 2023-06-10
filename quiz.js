const quizData = [
    {
        question: 'What does the abbreviation HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Markdown Language',
        c: 'Hyperloop Machine Language',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        answer: 'option-a',
    },
    {
        question: 'The full form of CSS is:',
        a: 'Central Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVs Sailboats',
        answer: 'option-b',
    },
    {
        question: 'Which language runs in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        answer: 'option-d',
    },

    {
        question: 'What is ReactJS?',
        a: 'Server-Side Library',
        b: 'Client-Side Library',
        c: 'Both a and b',
        d: 'None of these',
        answer: 'option-b',
    },
];

const quizContainer = document.getElementById('quiz-container');
const answerElements = document.querySelectorAll('.answer');
const questionEle = document.getElementById('question');

const option_a_text = document.getElementById('a_text');
const option_b_text = document.getElementById('b_text');
const option_c_text = document.getElementById('c_text');
const option_d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEle.innerText = currentQuizData.question;
    option_a_text.innerText = currentQuizData.a;
    option_b_text.innerText = currentQuizData.b;
    option_c_text.innerText = currentQuizData.c;
    option_d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerElements.forEach((ansEle) => (ansEle.checked = false));
}

function getSelected() {
    let Result;

    answerElements.forEach((ansElement, id) => {
        if (ansElement.checked) {
            Result = ansElement.id;
        }
    });

    return Result;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].answer) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `

                <h2 class="result">You answered ${score}/${quizData.length} questions correctly</h2>
                <button class="button" onclick="location.reload()">Reload</button>
            `;
        }
    }
});

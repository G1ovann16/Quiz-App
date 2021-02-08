const quizData= [
    {
        question: 'Que edad tiene Cristiano Ronaldo?',
        a:'10',
        b:'17',
        c:'37',
        d:'110',
        correct:'c'
    },
    {
        question: 'Que lenguaje de programacion es el mas usado en el 2019?',
        a:'Java',
        b:'C',
        c:'Phyton',
        d:'JavaScript',
        correct:'d'
    },{
        question: 'Quien es el presidente de EE.UU',
        a:'Florin Pop',
        b:'Donald Trump',
        c:'Michael Jakcson',
        d:'Antonio Ruiz Miguel',
        correct:'b'
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submiBtn = document.getElementById('submit');

let currentQuiz=0;
let score = 0;

loadQuiz();

function loadQuiz(){

        deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

    }

    function getSelected(){
        let answer = undefined;
        answerEls.forEach(answerEl =>{
            if(answerEl.checked){
                answer=  answerEl.id    
            }
        });
        return answer 
    }
    
    function deselectAnswers(){
        answerEls.forEach(answerEl =>{
            answerEl.checked= false;
        });
    }

    submiBtn.addEventListener("click", ()=>{

        const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
             score++;   
        }
        currentQuiz++;
        if(currentQuiz <  quizData.length){
            loadQuiz();
        }else{
        quiz.innerHTML = `<h2>Ha respondido correctamente ${score}/${quizData.length} de las preguntas</h2>
        <button onclick="location.reload()">Reiniciar</button>`;
        }
    }
    });
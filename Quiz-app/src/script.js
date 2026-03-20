
console.log("Developed by: Heshan Kumarasingha. Github:heshanX001");

const questions = [
    {
        question: "What does a compiler do?",
        answers: [
            {text: "Executes code line by line" , correct: false},
            {text: "Converts entire code into machine code before execution", correct: true},
            {text: "Debugs the program", correct: false},
            {text: "Stores data", correct: false}
        ]
    },
    {
        question: "Which is NOT an OOP principle?" ,
        answers: [
            {text: "Encapsulation", correct: false},
            {text: "Inheritance", correct: false},
            {text: "Polymorphism", correct: false},
            {text: "Compilation", correct: true}
        ]
    },
    {
        question: "Which memory is faster?" ,
        answers: [
            {text: "Heap", correct: false},
            {text: "Stack", correct: false},
            {text: "Hard disk", correct: false},
            {text: "Cache", correct: true}
        ]
    },
    {
        question: "What does SQL stand for?" ,
        answers: [
            {text: "Simple Query Language", correct: false},
            {text: "Structured Query Language", correct: true},
            {text: "System Query Logic", correct: false},
            {text: "Server Question Language", correct: false}
        ]
    },
    {
        question: "What is Git mainly used for?" ,
        answers: [
            {text: "Designing UI", correct: false},
            {text: "Database management", correct: false},
            {text: "Version control", correct: true},
            {text: "Running servers", correct: false}
        ]
    },
    {
        question: "Which is a frontend language?" ,
        answers: [
            {text: "Java", correct: false},
            {text: "Python", correct: false},
            {text: "JavaScript", correct: true },
            {text: "PostgreSQL", correct: false}
        ]
    },
    {
        question: "What is an API?",
        answers: [
            {text: "A database", correct: false},
            {text: "A user interface", correct: false},
            {text: "A way for programs to communicate", correct: true},
            {text: "A programming language", correct: false}
        ]
    },
    {
        question: "What is HTTPS?" ,
        answers: [
            {text: "A programming language", correct: false},
            {text: "A secure version of HTTP", correct: true},
            {text: "A database", correct: false},
            {text: "A framework", correct: false}
        ]
    },
    {
        question: "What is a bug?" ,
        answers: [
            {text: "A feature", correct: false},
            {text: "A hardware device", correct: false},
            {text: "An error in code", correct: true},
            {text: "A compiler", correct: false}
        ]
    },
    {
        question: "What is responsive design?" ,
        answers: [
            {text: "Fast loading website", correct: false},
            {text: "Website that works on different screen sizes", correct: true},
            {text: "Secure website", correct: false},
            {text: "Backend optimization", correct: false}
        ]
    },
    {
        question: "What is the time complexity of binary search?" ,
        answers: [
            {text: "O(n)", correct: false},
            {text: "O(log n)", correct: true},
            {text: "O(n²)", correct: false},
            {text: "O(1)", correct: false}
        ]
    },
    {
        question: "Which data structure uses FIFO?" ,
        answers: [
            {text: "Stack", correct: false},
            {text: "Queue", correct: true},
            {text: "Tree", correct: false},
            {text: "Graph", correct: false}
        ]
    },
    {
        question: "What is a primary key?" ,
        answers: [
            {text: "A duplicate field", correct: false},
            {text: "A backup key", correct: false},
            {text: "A foreign table", correct: false},
            {text: "A unique identifier", correct: true}
        ]
    },
    {
        question: "What is the purpose of indexing in a database?" ,
        answers: [
            {text: "To delete duplicate records", correct: false},
            {text: "To store backup data", correct: false},
            {text: "To speed up data retrieval", correct: true},
            {text: "To encrypt data", correct: false}
        ]
    },
    {
        question: "What is normalization in databases?" ,
        answers: [
            {text: "Removing redundancy", correct: true},
            {text: "Adding duplicate data", correct: false},
            {text: "Encrypting data", correct: false},
            {text: "Sorting data", correct: false}
        ]
    },
    {
        question: "What does 'asynchronous' mean in JavaScript?" ,
        answers: [
            {text: "Code runs in order only", correct: false},
            {text: "Code blocks execution", correct: false},
            {text: "Code runs once", correct: false},
            {text: "Code runs without waiting", correct: true}
        ]
    },
    {
        question: "Which is NOT a JavaScript data type?" ,
        answers: [
            {text: "String", correct: false},
            {text: "Boolean", correct: false},
            {text: "Float", correct: true},
            {text: "Undefined", correct: false}
        ]
    },
    {
        question: "What is a deadlock?" ,
        answers: [
            {text: "Fast execution", correct: false},
            {text: "Infinite loop", correct: false},
            {text: "Two processes waiting forever", correct: true},
            {text: "Memory leak", correct: false}
        ]
    },
    {
        question: "What is REST?" ,
        answers: [
            {text: "A database", correct: false},
            {text: "A UI framework", correct: false},
            {text: "An API architecture style", correct: true},
            {text: "A programming language", correct: false}
        ]
    },
    {
        question: "What is Big-O notation used for?" ,
        answers: [
            {text: "Memory storage", correct: false},
            {text: "Measuring performance", correct: true},
            {text: "Writing code", correct: false},
            {text: "Debugging", correct: false}
        ]
    },
    {
        question: "Which sorting algorithm is fastest on average?" ,
        answers: [
            {text: "Bubble Sort", correct: false},
            {text: "Selection Sort", correct: false},
            {text: "Quick Sort", correct: true},
            {text: "Linear Search", correct: false}
        ]
    },
    {
        question: "What is a foreign key?" ,
        answers: [
            {text: "Unique identifier", correct: false},
            {text: "Link between tables", correct: true},
            {text: "Duplicate key", correct: false},
            {text: "Random value", correct: false}
        ]
    },
    {
        question: "What does 'null' mean?" ,
        answers: [
            {text: "Zero", correct: false},
            {text: "Empty string", correct: false},
            {text: "No value", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        question: "What is recursion?" ,
        answers: [
            {text: "Looping using variables", correct: false},
            {text: "Function calling itself", correct: true},
            {text: "Repeating data", correct: false},
            {text: "Copying code", correct: false}
        ]
    },
    {
        question: "What is caching?" ,
        answers: [
            {text: "Deleting data", correct: false},
            {text: "Storing data temporarily for faster access", correct: true},
            {text: "Encrypting data", correct: false},
            {text: "Sending data", correct: false}
        ]
    }
];

const question   = document.getElementById('question');
const answerBtns = document.getElementById('answers');
const nextBtn    = document.getElementById('next-btn');

let questionCount = document.getElementById('question-number');
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    hideDefaults();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    question.innerHTML = questionNumber + ". " + currentQuestion.question;
    questionCount.innerHTML = questionNumber + " out of " + questions.length;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtns.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", answerSelection);
    });
}

function hideDefaults(){
        while(answerBtns.firstChild){
            answerBtns.removeChild(answerBtns.firstChild);
        }        
        nextBtn.style.display = 'none';
}

function answerSelection(element){
    const selectBtn = element.target;
    const isCorrect = selectBtn.dataset.correct == "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", questionHandle);

function questionHandle(){
    currentQuestionIndex++;
    hideDefaults();

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        hideDefaults();
        question.innerHTML = "Your score is: " + score + " of " + questions.length;
        nextBtn.innerHTML = "Replay";
        nextBtn.style.display = "block";

        questionCount.style.display = "none";
        nextBtn.addEventListener("click", () => {
            window.location.reload();
        })
    }
    
}

startQuiz();

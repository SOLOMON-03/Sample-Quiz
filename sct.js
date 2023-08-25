const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const progressElement = document.getElementById("progress");
const scoreElement = document.getElementById("score");
let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "Javascript is an _______ language?",
        choices: ["Object-Based","Object-Oreinted","Procedural","None of the above"],
        correctChoice: 0
    },
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["you should not use any of the JavaScript reserved keyword as variable name.", "javaScript variable names should not start with a numeral (0-9).", "Both of the above.", "None of the above."],
        correctChoice: 2
    },
    {
        question: "Can you pass a anonymous function as an argument to another function?",
        choices: ["true","false"],
        correctChoice: 0
    },
    {
        question: "Which of the following code creates an object?",
        choices: ["var book = Object()","var book = new Object()","var book = new OBJECT()","var book = new Book()"],
        correctChoice: 1
    },
    {
        question: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
        choices: ["toSource()","valueOf()", "toString()", "None of the above."],
        correctChoice: 1
    },
    {
        question: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
        choices: ["slice()","split()","substr()","substring()"],
        correctChoice: 3
    },
    {
        question: "Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
        choices: ["anchor()","link()","blink()","big()"],
        correctChoice: 0
    },
    {
        question: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        choices: ["sup()","small()","strike()","sub()"],
        correctChoice: 3
    },
    {
        question: "Which of the following function of Array object calls a function for each element in the array?",
        choices: ["Concat()","every()","filter()","forEach()"],
        correctChoice: 3
    },
    {
        question: "Which of the following function of Array object adds and/or removes elements from an array?",
        choices: ["toSource()", "sort()","splice()", "unshift()"],
        correctChoice: 2
    }
];
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice");
        choiceButton.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(choiceButton);
    });

    updateProgress();
}
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctChoice) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}
function updateProgress() {
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}
function showScore() {
    questionElement.textContent = "Quiz completed!";
    choicesElement.innerHTML = "";
    progressElement.textContent = "";
    scoreElement.textContent = `Your score: ${score} / ${questions.length}`;

    if (score >= questions.length * 0.8) {
        scoreElement.textContent += " Excellent!";
    } else if (score >= questions.length * 0.5) {
        scoreElement.textContent += " Good job!";
    } else {
        scoreElement.textContent += " Keep practicing.";
    }
}
prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showScore();
    }
});
loadQuestion();

const questions = [
    {
        question: "If n(g) = 0 for (g) n p c K K (RT), then",
        options: ["p = cKK", "p > cKK", "p < cKK", "p ≠ cKK"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "For the reaction 3(s) (s) 2(g) CaCO CaO CO, what is the formula of equilibrium constant KP?",
        options: ["KP = PCO2", "KP = PCO2 × PCaO", "KP = PCO2/PCaCO3", "KP = PCaO"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "2SO2 + O2 → 2SO3 + heat. In this reaction, if temperature will be increased what will be the effect on equilibrium constant KC?",
        options: ["will increase", "will decrease", "will remain constant", "will be zero"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which of the following is not Lewis acid?",
        options: ["BF3", "NH3", "Ag+", "AlCl3"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Which of the following is not weak acid?",
        options: ["C6H5OH", "HCN", "HCl", "HCOOH"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "What is the pOH of aqueous solution of Hydrazine?",
        options: ["> 7", "= 7", "< 7", "7"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Solution of which salt of the following is basic?",
        options: ["KCl", "NH4Cl", "CH3COONa", "KNO3"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "What is the relation between hydrolysis constant and ionization constant of base produced by the hydrolysis of salt?",
        options: ["Kw/Kb = Kh", "Kh = Kw × Kb", "Kb = Co[OH-]", "Kh = Kw/Ka"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "Oxygen has an oxidation state of +2 in",
        options: ["H2O2", "H2O", "OF2", "SO2"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of fluorine in F2O is",
        options: ["-1", "+1", "+2", "-2"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of O in H2O2 will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of O in K2O will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of O in RbO2 will be",
        options: ["-2", "-1", "+1/2", "+2"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of N3H will be",
        options: ["-2", "-1", "+1", "-3"],
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        question: "Oxidation number of H in LiAlH4 will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of O in HO2-1 will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of Cl in HClO4 will be",
        options: ["-2", "-1", "+1", "+7"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of Mg in MgS will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 3,
        difficulty: "easy"
    },
    {
        question: "Charge of Nitrate ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Charge of Dichromate ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Charge of Chlorate ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Charge of Sulphide ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Charge of Arsenate ion will be",
        options: ["-2", "-3", "+3", "+2"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Charge of Ammonium ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        question: "Oxidation number of Cl in ClO2 will be",
        options: ["-4", "-3", "+4", "+3"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of Cl in Cl2O7 will be",
        options: ["-7", "-2", "+7", "+2"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of Be in BeH2 will be",
        options: ["-2", "-3", "+2", "+3"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Oxidation number of S in H2SO4 will be",
        options: ["-4", "-3", "-2", "+6"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which of the following statement is correct?",
        options: ["Reducing agent is reduced", "Oxidising agent is oxidized", "Reducing agent is oxidized", "Oxidation and reduction does not occur in the reaction"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "In the reaction H2(g)+Br2(g)→2HBr(g) which substance undergoes oxidation?",
        options: ["H2(g)", "Br2(g)", "HBr", "H2(g) and Br2(g)"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which of the following atom can have positive and negative oxidation number in their compounds?",
        options: ["F", "Na", "Ar", "Cl"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "When Cu metal strip is dipped in AgNO3 aqueous solution, which phenomena will occur?",
        options: ["Intensity of blue colour increases", "Ag is not deposited", "Intensity of blue colour decreases", "Cu is deposited"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "When Ag ring is kept in CuSO4 aqueous solution, which phenomena will occur?",
        options: ["Intensity of blue colour increases", "Ag is not deposited", "Intensity of blue colour decreases", "No Reaction"],
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        question: "Correct statement regarding molecules SF4, CF4 and XeF4 are:",
        options: ["2, 0 and 1 lone pairs of central atom respectively", "1, 0 and 1 lone pairs of central atom respectively", "0, 0 and 2 lone pairs of central atom respectively", "1, 0 and 2 lone pairs of central atom respectively"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        question: "Which pair of elements can form multiple bond with itself and oxygen?",
        options: ["F, N", "N, Cl", "N, P", "N, C"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "The ratio of π-bond and σ-bond in tetracyano ethylene is:",
        options: ["2:1", "1:1", "1:2", "None of these"],
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        question: "Resonance structures can be written for:",
        options: ["O3", "NH3", "CH4", "H2O"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which of the following statements is incorrect for PCl5?",
        options: ["Its three P-Cl bond lengths are equal", "It involves sp3d hybridization", "It has a regular geometry", "Its shape is trigonal bipyramidal"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The number of sp2-s sigma bonds in benzene are:",
        options: ["3", "6", "12", "none of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "The structure of the noble gas compound XeF4 is:",
        options: ["square planar", "distorted tetrahedral", "tetrahedral", "octahedral"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "CH3-CH2-CH=CH2 has hybridisation:",
        options: ["sp, sp, sp2, sp2", "sp3, sp3, sp2, sp", "sp3, sp3, sp2, sp2", "sp3, sp2, sp2, sp"],
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        question: "Which molecular geometry is least likely to result from a trigonal bipyramidal electron geometry?",
        options: ["Trigonal planar", "See-saw", "Linear", "T-shaped"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The H-C-H bond angle in CH4 is 109.5°, due to lone pair repulsion, the H-O-H angle in H2O will:",
        options: ["remain the same", "increase", "decrease", "become 180°"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "BF3 and NF3 both are covalent compounds but NF3 is polar whereas BF3 is non-polar. This is because:",
        options: ["Nitrogen atom is smaller than boron atom", "N-F bond is more polar than B-F bond", "NF3 is pyramidal whereas BF3 is planar triangular", "BF3 is electron deficient whereas NF3 is not"],
        correctAnswer: 2,
        difficulty: "hard"
    },
    {
        question: "Dipole moment of NF3 is smaller than:",
        options: ["NH3", "CO2", "BF3", "CCl4"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which of the following molecules will have polar bonds but zero dipole moment?",
        options: ["O2", "CHCl3", "CF4", "none of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which of the following is an example of super octet molecule?",
        options: ["ClF3", "PCl5", "IF7", "All the three"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "In the electronic structure of H2SO4, the total number of unshared electrons is:",
        options: ["20", "16", "12", "8"],
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        question: "A compound contains three elements A, B and C, if the oxidation of A=+2, B=+5 and C=-2, the possible formula of the compound is:",
        options: ["A3(B4C)2", "A3(BC4)2", "A2(BC3)2", "ABC2"],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        question: "What is the experimental value of O-O bond length in atom of ozone?",
        options: ["1.28 Å", "1.48 Å", "1.21 Å", "1.18 Å"],
        correctAnswer: 0,
        difficulty: "medium"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 1800; // 30 minutes
let timer;
let answeredQuestions = new Array(50).fill(false);

function initializeQuiz() {
    loadQuestion();
    startTimer();
    createQuestionGrid();
    updateProgress();
    updateScore();
}

function loadQuestion() {
    const question = questions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const currentQuestionNum = document.getElementById('currentQuestionNum');

    if (questionText && optionsGrid && currentQuestionNum) {
        questionText.textContent = `${currentQuestion + 1}. ${question.question}`;
        currentQuestionNum.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

        optionsGrid.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.onclick = () => checkAnswer(index);
            button.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            optionsGrid.appendChild(button);
        });
    }

    updateNavigationButtons();
    updateQuestionGrid();
}

function checkAnswer(selectedIndex) {
    if (answeredQuestions[currentQuestion]) return;

    const question = questions[currentQuestion];
    const options = document.getElementsByClassName('option');

    if (selectedIndex === question.correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score++;
        showFeedback(true);
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correctAnswer].classList.add('correct');
        showFeedback(false);
    }

    answeredQuestions[currentQuestion] = true;
    updateScore();
    updateProgress();
    updateQuestionGrid();
    
    if (answeredQuestions.filter(Boolean).length === questions.length) {
        setTimeout(showResults, 1500);
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeLeftElement = document.getElementById('timeLeft');
    if (timeLeftElement) {
        timeLeftElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
    }
}

function updateScore() {
    const scoreElement = document.getElementById('currentScore');
    if (scoreElement) {
        scoreElement.textContent = `${score}/${questions.length}`;
    }
}

function showFeedback(isCorrect) {
    const feedbackModal = document.createElement('div');
    feedbackModal.className = `feedback-modal ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackModal.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
    
    document.body.appendChild(feedbackModal);
    
    setTimeout(() => {
        feedbackModal.remove();
    }, 2000);
}

function createQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    if (grid) {
        grid.innerHTML = '';
        questions.forEach((_, index) => {
            const button = document.createElement('button');
            button.className = 'question-number';
            button.onclick = () => jumpToQuestion(index);
            button.textContent = index + 1;
            grid.appendChild(button);
        });
        updateQuestionGrid();
    }
}

function updateQuestionGrid() {
    const numbers = document.getElementsByClassName('question-number');
    Array.from(numbers).forEach((number, index) => {
        number.className = 'question-number';
        if (index === currentQuestion) number.classList.add('current');
        if (answeredQuestions[index]) number.classList.add('answered');
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion();
    updateProgress();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = currentQuestion === questions.length - 1;
    }
}

function showResults() {
    clearInterval(timer);
    
    const resultsModal = document.getElementById('resultsModal');
    const finalScore = document.getElementById('finalScore');
    const accuracy = document.getElementById('accuracy');
    const timeTaken = document.getElementById('timeTaken');
    
    if (resultsModal && finalScore && accuracy && timeTaken) {
        const accuracyValue = ((score / questions.length) * 100).toFixed(1);
        const timeSpent = 1800 - timeLeft;
        
        finalScore.textContent = `${score}/${questions.length}`;
        accuracy.textContent = `${accuracyValue}%`;
        timeTaken.textContent = 
            `${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}`;
        
        resultsModal.classList.add('show');
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1800;
    answeredQuestions = new Array(questions.length).fill(false);
    
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) {
        resultsModal.classList.remove('show');
    }
    
    loadQuestion();
    startTimer();
    updateProgress();
    updateScore();
    updateQuestionGrid();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        previousQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        checkAnswer(parseInt(e.key) - 1);
    }
});

window.onload = initializeQuiz;

//Code from Stackoverflow that has been heavily edited

function showQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
}

function calculateResult() {
    const plushScores = {
        'Blubba the Narwhal': 0,
        'Saphire the Lizard': 0,
        'Gatsby the Goat': 0,
        'Jeffrey Pink the Flamingo': 0,
        'Wayne the Bat': 0
    };
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(answer => {
        const questionNumber = answer.name.charAt(1);
        const answerIndex = parseInt(answer.value, 10) - 1;
        const plushToy = getPlushToyForAnswer(questionNumber, answerIndex);
        plushScores[plushToy]++;
    });

    const maxScore = Math.max(...Object.values(plushScores));
    const candidates = Object.keys(plushScores).filter(plushToy => plushScores[plushToy] === maxScore);
    const result = chooseRandomPlushToy(candidates);
    alert(`Your recommended plush toy is: ${result}`);
    document.getElementById('quiz-container').style.display = 'none';
}

function getPlushToyForAnswer(questionNumber) {
    switch (parseInt(questionNumber, 10)) {
        case 1:
            return 'Blubba the Narwhal';
        case 2:
            return 'Saphire the Lizard';
        case 3:
            return 'Gatsby the Goat';
        case 4:
            return 'Jeffrey Pink the Flamingo';
        case 5:
            return 'Wayne the Bat';
        default:
            return 'Blubba the Narwhal';
    }
}

function chooseRandomPlushToy(candidates) {
    return candidates[Math.floor(Math.random() * candidates.length)];
}

function hideQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
}
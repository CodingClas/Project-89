function updateScore(e) {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score" + score;
}

function saveScore(e) {
    localStorage.setItem("score", score);
    document.getElementById("")
}

function nextPage(e) {
    window.location = "activity_2.html";
}

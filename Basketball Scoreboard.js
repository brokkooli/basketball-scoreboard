let countHome = 0;
let countGuest = 0;
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

function plus1Home() {
  countHome += 1;
  scoreHome.innerText = countHome;

  // Highlight the leader by adding/removing the 'leader' class
  highlightLeader();
}

function plus2Home() {
  countHome += 2;
  scoreHome.innerText = countHome;

  highlightLeader();
}

function plus3Home() {
  countHome += 3;
  scoreHome.innerText = countHome;

  highlightLeader();
}

function plus1Guest() {
  countGuest += 1;
  scoreGuest.innerText = countGuest;

  highlightLeader();
}

function plus2Guest() {
  countGuest += 2;
  scoreGuest.innerText = countGuest;

  highlightLeader();
}

function plus3Guest() {
  countGuest += 3;
  scoreGuest.innerText = countGuest;

  highlightLeader();
}

// Function to highlight the leading team
function highlightLeader() {
  // Remove the 'leader' class from both teams first
  document.getElementById("score-home").classList.remove("leader");
  document.getElementById("score-guest").classList.remove("leader");

  // Apply the 'leader' class to the team with the higher points
  if (countHome > countGuest) {
    document.getElementById("score-home").classList.add("leader");
  } else if (countGuest > countHome) {
    document.getElementById("score-guest").classList.add("leader");
  }
}

function newGame() {
  countHome = 0;
  countGuest = 0;
  scoreHome.innerText = countHome;
  scoreGuest.innerText = countGuest;

  highlightLeader();
}

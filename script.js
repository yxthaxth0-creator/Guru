const secretCode = "SORRY";

// Show missions
function showMission(number) {
  const sections = [
    "intro",
    "mission1",
    "reward1",
    "mission2",
    "reward2",
    "mission3",
    "final"
  ];

  sections.forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  if (number === 1) {
    document.getElementById("mission1").classList.remove("hidden");
    updateProgress(20);
  }

  if (number === 2) {
    document.getElementById("mission2").classList.remove("hidden");
    updateProgress(45);
  }

  if (number === 3) {
    document.getElementById("mission3").classList.remove("hidden");
    updateProgress(75);
  }
}


// Mission 1
function checkMission1() {
  const answer = document
    .getElementById("answer1")
    .value
    .trim();

  const error = document.getElementById("error1");

  if (answer === "4") {
    document.getElementById("mission1").classList.add("hidden");
    document.getElementById("reward1").classList.remove("hidden");

    updateProgress(35);
    celebrateSmall();
  } else {
    error.textContent = "Hmm... even I know the answer is 4 😭";
    shake("mission1");
  }
}


// Mission 2
function checkMission2() {
  const answer = document
    .getElementById("answer2")
    .value
    .trim()
    .toUpperCase();

  const error = document.getElementById("error2");

  if (answer === secretCode) {
    document.getElementById("mission2").classList.add("hidden");
    document.getElementById("reward2").classList.remove("hidden");

    updateProgress(65);
    celebrateSmall();
  } else {
    error.textContent =
      "Incorrect code! Detective skills need improvement 😂";

    shake("mission2");
  }
}


// Mission 3
function checkMission3() {
  const answer = document
    .getElementById("answer3")
    .value
    .trim()
    .toLowerCase();

  const error = document.getElementById("error3");

  const correctAnswers = [
    "sorry",
    "say sorry",
    "apologize",
    "apologise"
  ];

  if (correctAnswers.includes(answer)) {
    document.getElementById("mission3").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");

    updateProgress(100);
    celebrate();
  } else {
    error.textContent = "Almost! Hint: It starts with S 😭";
    shake("mission3");
  }
}


// Progress bar
function updateProgress(percent) {
  document.getElementById("progressBar").style.width =
    percent + "%";
}


// Shake animation
function shake(id) {
  const element = document.getElementById(id);

  element.classList.add("shake");

  setTimeout(() => {
    element.classList.remove("shake");
  }, 400);
}


// Small celebration
function celebrateSmall() {
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement("div");

    emoji.classList.add("confetti");

    emoji.textContent =
      ["🎉", "✨", "🎁", "🥳"]
      [Math.floor(Math.random() * 4)];

    emoji.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 3000);
  }
}


// Big celebration
function celebrate() {
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const emoji = document.createElement("div");

      emoji.classList.add("confetti");

      emoji.textContent =
        ["🎉", "🎁", "✨", "🥳", "🏆"]
        [Math.floor(Math.random() * 5)];

      emoji.style.left = Math.random() * 100 + "vw";

      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 3000);

    }, i * 40);
  }
}

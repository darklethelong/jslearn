const choices = ["rock", "paper", "scissors"];
const buttonContainer = document.getElementById("buttonContainer");
const outputComputer = document.getElementById("outputComputer");
const inputUser = document.getElementById("inputUser");
const resultPart = document.getElementById("result");

const imagePath = `file:///C:\\Users\\longl\\jslearn\\img`; // Store the base path

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "tie";
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) return "win";
    return "lose"; // Simplified logic
}

function displayImage(container, choice) {
    const image = document.createElement('img');
    image.src = `${imagePath}\\${choice}.png`; // Use stored base path
    image.alt = choice;
    container.appendChild(image);
}


choices.forEach(choice => {
    const button = document.createElement('button');
    displayImage(button, choice); // Display image on the button

    button.addEventListener('click', () => {  // No need for event object
        const userChoice = choice; // Get choice directly
        const computerChoice = getComputerChoice();

        inputUser.innerHTML = "User: "; // Clear previous result
        displayImage(inputUser, userChoice);

        outputComputer.innerHTML = "Computer: "; // Clear previous result
        displayImage(outputComputer, computerChoice);

        const result = determineWinner(userChoice, computerChoice);
        resultPart.textContent = result;
    });

    buttonContainer.appendChild(button);
});
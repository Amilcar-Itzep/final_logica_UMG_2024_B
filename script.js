document.getElementById('displayTextButton').addEventListener('click', displayText);

function displayText() {
    const userInput = document.getElementById('userInput').value;
    const displayArea = document.getElementById('displayArea');
    displayArea.textContent = userInput;
}

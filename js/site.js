// get all the elements that we need
let stringInputField = document.getElementById("userString");

let messageElement = document.getElementById("message");

let alertElement = document.getElementById("alert");

// get the string from the input
function getValue() {

    alertElement.classList.add("invisible");

    let userInput = stringInputField.value;

    if (!userInput) {
        messageElement.innerHTML =
            `
                You must enter a string to reverse...
            `;

        alertElement.classList.remove("invisible");

    } else {
        let invertString = reverseString(userInput);
        displayString(userInput, invertString);
    }

}


// reverse the string
function reverseString(stringToReverse) {
    let reversedString = [];

    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        reversedString += stringToReverse[i];
    }

    return reversedString.toString();
}


// display the reverse string
function displayString(userInput, invertString) {

    // write to the page
    messageElement.innerHTML =
        `
            Original text : <br>${userInput}
            <hr>
            Inverted text : <br>${invertString}
        `;

    // show the alert box
    alertElement.classList.remove("invisible");
}

document.getElementById("btnSubmit").addEventListener("click", getValue);

// in case we press enter
document.getElementById("reverseForm").addEventListener("submit", e => {
    e.preventDefault();
    getValue();

    // reset the input to an empty string
    document.getElementById("userString").value = ""
})
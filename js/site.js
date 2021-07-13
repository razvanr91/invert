// get the string from the input
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userInput = document.getElementById("userString").value;
    let invertString = reverseString(userInput);

    displayString(invertString);
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
function displayString(invertString) {

    // write to the page
    document.getElementById("message").innerHTML = `${invertString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}

document.getElementById("btnSubmit").addEventListener("click", getValue);
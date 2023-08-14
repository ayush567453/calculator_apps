let inputString = "";
let buttons = document.querySelectorAll('.button');
let inputElement = document.querySelector(".inputs input");
let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let equalButton = document.getElementById("equal");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === "=") {
            try {
                // Replace 'x' with '*' for multiplication and '/' for division
                inputString = inputString.replace(/x/g, '*').replace(/÷/g, '/');
                inputString = eval(inputString).toString();
                inputElement.value = inputString;
            } catch (error) {
                inputElement.value = "Error";
            }
        } else if (buttonText === "Clear") {
            inputString = "";
            inputElement.value = "";
        } else if (buttonText === "Del") {
            inputString = inputString.slice(0, -1);
            inputElement.value = inputString;
        } else {
            inputString += buttonText;
            inputElement.value = inputString;
        }
    });
});

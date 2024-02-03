// 1:- function for all input field
function InputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputFloat = parseFloat(inputString);
    inputField.value = '';
    return inputFloat;
}

// 2:-function for total amount of deposit and withdrawn
function TotalAlmountById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementFloat = parseFloat(elementString);
    return elementFloat;
}

// 3:-function for set text 
function setText(elementId,newValue){
    const text = document.getElementById(elementId);
    text.innerText = newValue;
}
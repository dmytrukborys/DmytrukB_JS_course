
window.onload = handleUserInput;

function handleUserInput() {
    var submitButton = document.getElementById("submitButton");
    submitButton.onclick = countUserInput;
    addEventListener("click", function(event){
        event.preventDefault()
    });
}

function countUserInput() {
    var userInput = parseFloat(document.getElementById("inputNumbers").value);
    var selectedOption = document.getElementById("selectOptions").options[selectOptions.selectedIndex].value;
    var result = document.getElementById("result");
    var wellDone;
    if (selectedOption=="hours") wellDone = 3600*userInput;
    if (selectedOption=="days")  wellDone = 86400*userInput;
    if (selectedOption=="months") wellDone = 2592000*userInput;

    result.innerHTML = wellDone + " секунд в " + userInput + document.getElementById("selectOptions").options[selectOptions.selectedIndex].innerHTML;
}

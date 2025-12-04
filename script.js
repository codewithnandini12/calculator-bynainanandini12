let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function reverseSign() {
    if (display.value) {
        display.value = eval(display.value * -1);
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

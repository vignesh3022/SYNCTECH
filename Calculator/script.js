function toggleCalculator() {
    var toggleSwitch = document.getElementById("toggleSwitch");
    var scientificCalculator = document.getElementById("scientificCalculator");
    var basicCalculator = document.getElementById("basicCalculator");

    if (toggleSwitch.checked) {
        // Show scientific calculator
        scientificCalculator.style.display = "block";
        basicCalculator.style.display = "none";
    } else {
        // Show basic calculator
        scientificCalculator.style.display = "none";
        basicCalculator.style.display = "block";
    }
}
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'x'){
            string += '*';
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

function backspace() {
	let display = document.getElementById("display");
	display.value = display.value.slice(0, -1);
}

function calculate() {
	let display = document.getElementById("display");
	let expression = display.value;
	let result;

	try {
		// Convert trigonometric function inputs from degrees to radians
		expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
		expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
		expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');

		result = math.evaluate(expression);
		display.value = result;
	} catch (error) {
		display.value = "Error";
	}
}

function squareRoot() {
	let display = document.getElementById("display");
	display.value += "sqrt(";
}

function base10Log() {
	let display = document.getElementById("display");
	display.value += "log(";
}

function pi() {
	let display = document.getElementById("display");
	display.value += "pi";
}

function e() {
	let display = document.getElementById("display");
	display.value += "e";
}

function power() {
	let display = document.getElementById("display");
	display.value += "^(";
}
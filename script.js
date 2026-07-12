

let buttons = document.querySelectorAll(".btn");
let screenDigits = document.querySelector(".screen-digits");

let expression = "";

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        let value = btn.textContent;

        // Clear
        if(value === "CE"){
            expression = "";
            screenDigits.textContent = "0";
            return;
        }

        // one digit Clear
        if(value === "x"){
            expression = expression.slice(0, -1);
            screenDigits.textContent = expression;
            return;
        }

        // Equal
        if(value === "="){

            try{
                expression = eval(expression).toString();
                screenDigits.textContent = expression;
            }
            catch{
                screenDigits.textContent = "Error";
                expression = "";
            }

            return;
        }

        // Append button value
        expression += value;
        screenDigits.textContent = expression;

    });

});














function calculate(expression){

    let operator;

    if(expression.includes("+")){
        operator = "+";
    }
    else if(expression.includes("-")){
        operator = "-";
    }
    else if(expression.includes("*")){
        operator = "*";
    }
    else if(expression.includes("/")){
        operator = "/";
    }
    else if(expression.includes("%")){
        operator = "%";
    }

    let parts = expression.split(operator);

    let num1 = Number(parts[0]);
    let num2 = Number(parts[1]);

    switch(operator){

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        case "%":
            return num1 % num2;
    }
}
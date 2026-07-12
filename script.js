

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

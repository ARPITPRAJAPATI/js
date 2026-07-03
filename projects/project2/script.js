const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);

    const result = document.querySelector("#results");

    if (height <= 0 || isNaN(height)) {
        result.style.color = "red";
        result.innerHTML = "Please enter a valid height.";
    }
    else if (weight <= 0 || isNaN(weight)) {
        result.style.color = "red";
        result.innerHTML = "Please enter a valid weight.";
    }
    else {
        const bmi = weight / ((height * height) / 10000);

        if (bmi < 18.6) {
            result.innerHTML = `
                Your BMI is <span style="color:red">${bmi.toFixed(2)}</span> - <span style="color:red">UNDERWEIGHT</span>
            `;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `
                Your BMI is <span style="color:green">${bmi.toFixed(2)}</span> - <span style="color:green">NORMAL</span>
            `;
        }
        else {
            result.innerHTML = `
                Your BMI is <span style="color:orange">${bmi.toFixed(2)}</span> - <span style="color:orange">OVERWEIGHT</span>
            `;
        }
    }
});
window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click',calculateBmi)
}

function calculateBmi() {
    const Height = document.querySelector('#Height').value;
    const Weight = document.querySelector('#Weight').value;
    const result = document.querySelector('#result');
    if (!Height ||isNaN(Height) || Height<0) {
        result.innerText = "Please provide a valid Height";
        return;
    } else if (!Weight ||isNaN(Weight) || Weight<0) {
        result.innerText = "Please provide a valid Weight";
        return;
    }

    const bmi = (Weight/(Height*Height));

    if (bmi < 18.5) {
        result.innerText = 'Under Weight: ${bmi}';
    } else if (bmi  >= 18.5 && bmi < 24.9) {
        result.innerText = 'Normal:'+ bmi;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = 'Over Weight:'+ bmi;
    } else if (bmi >= 30 && bmi< 34.9) {
        result.innerText = 'Obesity (class I):'+bmi;
    } else if (bmi >= 35 && bmi < 39.9) {
        result.innerText = 'Obesity (Class II):'+ bmi;
    } else {
        result.innerText = 'Extreme Obesity:'+ bmi;
    }
}

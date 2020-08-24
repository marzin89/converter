const length = document.getElementById('length');

length.addEventListener('click', changeTabColor);

length.addEventListener('click', updateUnits);

const weight = document.getElementById('weight');

weight.addEventListener('click', changeTabColor);

weight.addEventListener('click', updateUnits);

const volume = document.getElementById('volume');

volume.addEventListener('click', changeTabColor);

volume.addEventListener('click', updateUnits);

const temperature = document.getElementById('temperature');

temperature.addEventListener('click', changeTabColor);

temperature.addEventListener('click', updateUnits);

const optionOneMetric = document.getElementById('millimeters');

const optionTwoMetric = document.getElementById('centimeters');

const optionThreeMetric = document.getElementById('meters');

const optionFourMetric = document.getElementById('kilometers');

const optionOneImperial = document.getElementById('inches');

const optionTwoImperial = document.getElementById('feet');

const optionThreeImperial = document.getElementById('yards');

const optionFourImperial = document.getElementById('miles');

function changeTabColor() {

    if (this.innerHTML == 'Weight') {

        this.style.backgroundColor = 'salmon';

        length.style.backgroundColor = 'lightsalmon';

        volume.style.backgroundColor = 'lightsalmon';

        temperature.style.backgroundColor = 'lightsalmon';

    } else if (this.innerHTML == 'Volume') {

        this.style.backgroundColor = 'salmon';

        length.style.backgroundColor = 'lightsalmon';

        weight.style.backgroundColor = 'lightsalmon';

        temperature.style.backgroundColor = 'lightsalmon';

    } else if (this.innerHTML == 'Temperature') {

        this.style.backgroundColor = 'salmon';

        length.style.backgroundColor = 'lightsalmon';

        weight.style.backgroundColor = 'lightsalmon';

        volume.style.backgroundColor = 'lightsalmon';

    } else if (this.innerHTML == 'Length') {

        this.style.backgroundColor = 'salmon';
        
        weight.style.backgroundColor = 'lightsalmon';

        volume.style.backgroundColor = 'lightsalmon';

        temperature.style.backgroundColor = 'lightsalmon';
    }
}

function updateUnits() {

    if (this.innerHTML == 'Weight') {

        optionOneMetric.innerHTML = 'Milligrams';

        optionTwoMetric.innerHTML = 'Grams';

        optionThreeMetric.innerHTML = 'Kilograms';

        optionFourMetric.innerHTML = 'Tons';

        optionOneImperial.innerHTML = 'Ounces';

        optionTwoImperial.innerHTML = 'Pounds';

        optionThreeImperial.innerHTML = 'Short ton';

        optionFourImperial.innerHTML = 'Long ton';

    } else if (this.innerHTML == 'Volume') {

        optionOneMetric.innerHTML = 'Milliliters';

        optionTwoMetric.innerHTML = 'Centiliters';

        optionThreeMetric.innerHTML = 'Deciliters';

        optionFourMetric.innerHTML = 'Liters';

        optionOneImperial.innerHTML = 'Cups';

        optionTwoImperial.innerHTML = 'Pints';

        optionThreeImperial.innerHTML = 'Quarts';

        optionFourImperial.innerHTML = 'Gallons';

    } else if (this.innerHTML == 'Temperature') {

        optionOneMetric.innerHTML = 'Celsius';

        optionTwoMetric.innerHTML = '';

        optionThreeMetric.innerHTML = '';

        optionFourMetric.innerHTML = '';

        optionOneImperial.innerHTML = 'Farenheit';

        optionTwoImperial.innerHTML = '';

        optionThreeImperial.innerHTML = '';

        optionFourImperial.innerHTML = '';

    } else if (this.innerHTML = 'Length') {

        optionOneMetric.innerHTML = 'Millimeters';

        optionTwoMetric.innerHTML = 'Centimeters';

        optionThreeMetric.innerHTML = 'Meters';

        optionFourMetric.innerHTML = 'Kilometers';

        optionOneImperial.innerHTML = 'Inches';

        optionTwoImperial.innerHTML = 'Feet';

        optionThreeImperial.innerHTML = 'Yards';

        optionFourImperial.innerHTML = 'Miles';
    }
}
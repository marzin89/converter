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

const switchBtn = document.getElementById('switch-imperial-metric');

switchBtn.addEventListener('click', switchMetricImperial);

const labelMetric = document.getElementById('label-metric');

const labelImperial = document.getElementById('label-imperial');

function switchMetricImperialLength() {

    if (optionOneMetric.innerHTML == 'Millimeters') {

        optionOneMetric.innerHTML = 'Inches';

        optionTwoMetric.innerHTML = 'Feet';

        optionThreeMetric.innerHTML = 'Yards';

        optionFourMetric.innerHTML = 'Miles';

        optionOneImperial.innerHTML = 'Millimeters';

        optionTwoImperial.innerHTML = 'Centimeters';

        optionThreeImperial.innerHTML = 'Meters';

        optionFourImperial.innerHTML = 'Kilometers';

        labelMetric.innerHTML = 'Imperial';

        labelImperial.innerHTML = 'Metric';

    } else if (optionOneMetric.innerHTML == 'Inches') {

        optionOneMetric.innerHTML = 'Millimeters';

        optionTwoMetric.innerHTML = 'Centimeters';

        optionThreeMetric.innerHTML = 'Meters';

        optionFourMetric.innerHTML = 'Kilometers';

        optionOneImperial.innerHTML = 'Inches';

        optionTwoImperial.innerHTML = 'Feet';

        optionThreeImperial.innerHTML = 'Yards';

        optionFourImperial.innerHTML = 'Miles';

        labelMetric.innerHTML = 'Metric';

        labelImperial.innerHTML = 'Imperial';
    } 
}

function switchMetricImperialWeight() {

    if (optionOneMetric.innerHTML == 'Milligrams') {

        optionOneMetric.innerHTML = 'Ounces';

        optionTwoMetric.innerHTML = 'Pounds';

        optionThreeMetric.innerHTML = 'Short ton';

        optionFourMetric.innerHTML = 'Long ton';

        optionOneImperial.innerHTML = 'Milligrams';

        optionTwoImperial.innerHTML = 'Grams';

        optionThreeImperial.innerHTML = 'Kilograms';

        optionFourImperial.innerHTML = 'Tons';

        labelMetric.innerHTML = 'Imperial';

        labelImperial.innerHTML = 'Metric';

    } else if (optionOneMetric.innerHTML == 'Ounces') {

        optionOneMetric.innerHTML = 'Milligrams';

        optionTwoMetric.innerHTML = 'Grams';

        optionThreeMetric.innerHTML = 'Kilograms';

        optionFourMetric.innerHTML = 'Tons';

        optionOneImperial.innerHTML = 'Ounces';

        optionTwoImperial.innerHTML = 'Pounds';

        optionThreeImperial.innerHTML = 'Short ton';

        optionFourImperial.innerHTML = 'Long ton';

        labelMetric.innerHTML = 'Metric';

        labelImperial.innerHTML = 'Imperial';
    }
}

function switchMetricImperialVolume() {

    if (optionOneMetric.innerHTML == 'Milliliters') {

        optionOneMetric.innerHTML = 'Cups';

        optionTwoMetric.innerHTML = 'Pints';

        optionThreeMetric.innerHTML = 'Quarts'

        optionFourMetric.innerHTML = 'Gallons';

        optionOneImperial.innerHTML = 'Milliliters';

        optionTwoImperial.innerHTML = 'Centiliters'

        optionThreeImperial.innerHTML = 'Deciliters';

        optionFourImperial.innerHTML = 'Liters';

        labelMetric.innerHTML = 'Imperial';

        labelImperial.innerHTML = 'Metric';

    } else if (optionOneMetric.innerHTML == 'Cups') {

        optionOneMetric.innerHTML = 'Milliliters';

        optionTwoMetric.innerHTML = 'Centiliters';

        optionThreeMetric.innerHTML = 'Deciliters'

        optionFourMetric.innerHTML = 'Liters';
        
        optionOneImperial.innerHTML = 'Cups';

        optionTwoImperial.innerHTML = 'Pints'

        optionThreeImperial.innerHTML = 'Quarts';

        optionFourImperial.innerHTML = 'Gallons';

        labelMetric.innerHTML = 'Metric';

        labelImperial.innerHTML = 'Imperial';
    }
}

function switchMetricImperialTemperature() {

    if (optionOneMetric.innerHTML == 'Celsius') {

        optionOneMetric.innerHTML = 'Farenheit';

        optionOneImperial.innerHTML = 'Celsius';

        labelMetric.innerHTML = 'Imperial';

        labelImperial.innerHTML = 'Metric';

    } else if (optionOneMetric.innerHTML == 'Farenheit') {

        optionOneMetric.innerHTML = 'Celsius';

        optionOneImperial.innerHTML = 'Farenheit';

        labelMetric.innerHTML = 'Metric';

        labelImperial.innerHTML = 'Imperial';
    }
}

function switchMetricImperial() {
    
    switchMetricImperialLength();

    switchMetricImperialWeight();

    switchMetricImperialVolume();

    switchMetricImperialTemperature();    
}

const convertBtn = document.getElementById('convert');

convertBtn.addEventListener('click', convertLengthMetricToImperial);

const metricValue = document.getElementById('metric-value');

metricValue.addEventListener('input', isValueANumber);

const imperialValue = document.getElementById('imperial-value');

const metricUnits = document.getElementById('length-metric');

const imperialUnits = document.getElementById('length-imperial');

const message = document.querySelector('span');

function isValueANumber() {

    if (isNaN(metricValue.value) || metricValue.value.slice(-1) == '.') {

        message.innerHTML = 'Please enter a valid number!';

    } else {

        message.innerHTML = '';
    }
}

function convertLengthMetricToImperial() {

    if (isNaN(metricValue.value) == false) {

        if (metricUnits[metricUnits.selectedIndex].text == 'Millimeters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Inches') {

            imperialValue.value = metricValue.value / 25.4;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Millimeters' && 

        imperialUnits[imperialUnits.selectedIndex].text == 'Feet') {

            imperialValue.value = metricValue.value / 304.8;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Millimeters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Yards') {

            imperialValue.value = metricValue.value / 914.4;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Millimeters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Miles') {

            imperialValue.value = metricValue.value / 1609344;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centimeters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Inches') {

            imperialValue.value = metricValue.value / 2.54;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centimeters' &&

        imperialUnits[imperialUnits.selectedIndex].text == 'Feet') {

            imperialValue.value = metricValue.value / 30.48;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centimeters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Yards') {

            imperialValue.value = metricValue.value / 91.44;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centimeters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Miles') {

            imperialValue.value = metricValue.value / 160934.4;
        
        } else if (metricUnits[metricUnits.selectedIndex].text == 'Meters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Inches') {

            imperialValue.value = metricValue.value * 39.3700787;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Meters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Feet') {

            imperialValue.value = metricValue.value * 3.2808399;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Meters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Yards') {

            imperialValue.value = metricValue.value * 1.0936133;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Meters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Miles') {

            imperialValue.value = metricValue.value * 0.000621371192;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilometers' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Inches') {

            imperialValue.value = metricValue.value * 39370.0787;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilometers' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Feet') {

            imperialValue.value = metricValue.value * 3280.8399;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilometers' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Yards') {

            imperialValue.value = metricValue.value * 1093.6133;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilometers' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Miles') {

            imperialValue.value = metricValue.value * 0.621371192;
        }
    }
}
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

        optionOneImperial.innerHTML = 'Fl oz';

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

        optionOneMetric.innerHTML = 'Fl oz';

        optionTwoMetric.innerHTML = 'Pints';

        optionThreeMetric.innerHTML = 'Quarts'

        optionFourMetric.innerHTML = 'Gallons';

        optionOneImperial.innerHTML = 'Milliliters';

        optionTwoImperial.innerHTML = 'Centiliters'

        optionThreeImperial.innerHTML = 'Deciliters';

        optionFourImperial.innerHTML = 'Liters';

        labelMetric.innerHTML = 'Imperial';

        labelImperial.innerHTML = 'Metric';

    } else if (optionOneMetric.innerHTML == 'Fl oz') {

        optionOneMetric.innerHTML = 'Milliliters';

        optionTwoMetric.innerHTML = 'Centiliters';

        optionThreeMetric.innerHTML = 'Deciliters'

        optionFourMetric.innerHTML = 'Liters';
        
        optionOneImperial.innerHTML = 'Fl oz';

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

convertBtn.addEventListener('click', convertTemperature);

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

function convertLengthImperialToMetric() {

    if (isNaN(metricValue.value) == false) {

        if (metricUnits[metricUnits.selectedIndex].text == 'Inches' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Millimeters') {

            imperialValue.value = metricValue.value * 25.4;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Inches' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centimeters') {

            imperialValue.value = metricValue.value * 2.54;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Inches' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Meters') {

            imperialValue.value = metricValue.value * 0.0254;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Inches' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilometers') {

            imperialValue.value = metricValue.value * 0.0000254;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Feet' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Millimeters') {

            imperialValue.value = metricValue.value * 304.8;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Feet' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centimeters') {

            imperialValue.value = metricValue.value * 30.48;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Feet' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Meters') {

            imperialValue.value = metricValue.value * 0.3048;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Feet' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilometers') {

            imperialValue.value = metricValue.value * 0.0003048;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Yards' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Millimeters') {

            imperialValue.value = metricValue.value * 914.4;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Yards' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centimeters') {

            imperialValue.value = metricValue.value * 91.44;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Yards' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Meters') {

            imperialValue.value = metricValue.value * 0.9144;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Yards' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilometers') {

            imperialValue.value = metricValue.value * 0.0009144;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Miles' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Millimeters') {

            imperialValue.value = metricValue.value * 1609350;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Miles' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centimeters') {

            imperialValue.value = metricValue.value * 160935;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Miles' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Meters') {

            imperialValue.value = metricValue.value * 1609.35;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Miles' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilometers') {

            imperialValue.value = metricValue.value * 1.60935;
        }
    }
}

function convertWeightMetricToImperial() {

    if (isNaN(metricValue.value) == false) {

        if (metricUnits[metricUnits.selectedIndex].text == 'Milligrams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Ounces') {

            imperialValue.value = metricValue.value * 0.000035274;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Milligrams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pounds') {

            imperialValue.value = metricValue.value * 0.0000022046;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Milligrams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Short ton') {

            imperialValue.value = metricValue.value * 1.10231221E-9;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Milligrams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Long ton') {

            imperialValue.value = metricValue.value * 9.842073304E-10;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Grams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Ounces') {

            imperialValue.value = metricValue.value * 0.0352739907;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Grams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pounds') {

            imperialValue.value = metricValue.value * 0.0022046244;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Grams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Short ton') {

            imperialValue.value = metricValue.value * 0.0000011023;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Grams' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Long ton') {

            imperialValue.value = metricValue.value * 9.842073304E-7;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilograms' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Ounces') {

            imperialValue.value = metricValue.value * 35.273990723;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilograms' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pounds') {

            imperialValue.value = metricValue.value * 2.2046244202;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilograms' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Short ton') {

            imperialValue.value = metricValue.value * 0.0011023122;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Kilograms' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Long ton') {

            imperialValue.value = metricValue.value * 0.0009842073;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Tons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Ounces') {

            imperialValue.value = metricValue.value * 35273.990723;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Tons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pounds') {

            imperialValue.value = metricValue.value * 2204.6244202;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Tons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Short ton') {

            imperialValue.value = metricValue.value * 1.1023122101;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Tons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Long ton') {

            imperialValue.value = metricValue.value * 0.9842073304;
        }
    }
}

function convertWeightImperialToMetric() {

    if (isNaN(metricValue.value) == false) {

        if (metricUnits[metricUnits.selectedIndex].text == 'Ounces' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milligrams') {

            imperialValue.value = metricValue.value * 28349.5;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Ounces' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Grams') {

            imperialValue.value = metricValue.value * 28.3495;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Ounces' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilograms') {

            imperialValue.value = metricValue.value * 0.0283495;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Ounces' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Tons') {

            imperialValue.value = metricValue.value * 0.0000283495;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pounds' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milligrams') {

            imperialValue.value = metricValue.value * 453592;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pounds' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Grams') {

            imperialValue.value = metricValue.value * 453.592;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pounds' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilograms') {

            imperialValue.value = metricValue.value * 0.453592;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pounds' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Tons') {

            imperialValue.value = metricValue.value * 0.000453592;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Short ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milligrams') {

            imperialValue.value = metricValue.value * 907184000;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Short ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Grams') {

            imperialValue.value = metricValue.value * 907184;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Short ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilograms') {

            imperialValue.value = metricValue.value * 907.184;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Short ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Tons') {

            imperialValue.value = metricValue.value * 0.907184;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Long ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milligrams') {

            imperialValue.value = metricValue.value * 1016046080;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Long ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Grams') {

            imperialValue.value = metricValue.value * 1016046.08;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Long ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Kilograms') {

            imperialValue.value = metricValue.value * 1016.04608;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Long ton' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Tons') {

            imperialValue.value = metricValue.value * 1.01604608;
        }
    }
}

function convertVolumeMetricToImperial() {

    if (isNaN(metricValue.value) == false) {

        if (metricUnits[metricUnits.selectedIndex].text == 'Milliliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Fl oz') {

            imperialValue.value = metricValue.value * 0.0351950797;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Milliliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pints') {

            imperialValue.value = metricValue.value * 0.001759754;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Milliliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Quarts') {

            imperialValue.value = metricValue.value * 0.000879877;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Milliliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Gallons') {

            imperialValue.value = metricValue.value * 0.0002199692;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centiliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Fl oz') {

            imperialValue.value = metricValue.value * 0.351950797;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centiliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pints') {

            imperialValue.value = metricValue.value * 0.01759754;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centiliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Quarts') {

            imperialValue.value = metricValue.value * 0.00879877;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Centiliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Gallons') {

            imperialValue.value = metricValue.value * 0.002199692;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Deciliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Fl oz') {

            imperialValue.value = metricValue.value * 3.51950797;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Deciliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pints') {

            imperialValue.value = metricValue.value * 0.1759754;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Deciliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Quarts') {

            imperialValue.value = metricValue.value * 0.0879877;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Deciliters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Gallons') {

            imperialValue.value = metricValue.value * 0.02199692;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Liters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Fl oz') {

            imperialValue.value = metricValue.value * 35.195079728;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Liters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Pints') {

            imperialValue.value = metricValue.value * 1.7597539864;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Liters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Quarts') {

            imperialValue.value = metricValue.value * 0.8798769932;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Liters' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Gallons') {

            imperialValue.value = metricValue.value * 0.2199692483;
        }
    }
}

function convertVolumeImperialToMetric() {

    if (isNaN(metricValue.value) == false) {

        if (metricUnits[metricUnits.selectedIndex].text == 'Fl oz' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milliliters') {

            imperialValue.value = metricValue.value * 28.4130625;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Fl oz' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centiliters') {

            imperialValue.value = metricValue.value * 2.84130625;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Fl oz' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Deciliters') {

            imperialValue.value = metricValue.value * 0.284130625;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Fl oz' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Liters') {

            imperialValue.value = metricValue.value * 0.0284130625;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pints' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milliliters') {

            imperialValue.value = metricValue.value * 568.26125;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pints' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centiliters') {

            imperialValue.value = metricValue.value * 56.826125;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pints' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Deciliters') {

            imperialValue.value = metricValue.value * 5.6826125;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Pints' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Liters') {

            imperialValue.value = metricValue.value * 0.56826125;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Quarts' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milliliters') {

            imperialValue.value = metricValue.value * 1136.5225;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Quarts' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centiliters') {

            imperialValue.value = metricValue.value * 113.65225;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Quarts' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Deciliters') {

            imperialValue.value = metricValue.value * 11.365225;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Quarts' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Liters') {

            imperialValue.value = metricValue.value * 1.1365225;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Gallons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Milliliters') {

            imperialValue.value = metricValue.value * 4546.09;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Gallons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Centiliters') {

            imperialValue.value = metricValue.value * 454.609;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Gallons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Deciliters') {

            imperialValue.value = metricValue.value * 45.4609;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Gallons' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Liters') {

            imperialValue.value = metricValue.value * 4.54609;
        }
    }
}

function convertTemperature() {

    if (isNaN(metricValue.value) == false) {

        if (metricUnits[metricUnits.selectedIndex].text == 'Celsius' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Farenheit') {

            imperialValue.value = metricValue.value * 1.8 + 32;

        } else if (metricUnits[metricUnits.selectedIndex].text == 'Farenheit' &&
        
        imperialUnits[imperialUnits.selectedIndex].text == 'Celsius') {

            imperialValue.value = (metricValue.value - 32) * 5 / 9;
        }
    }
}
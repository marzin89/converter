const length = document.getElementById('length');

length.addEventListener('click', changeTabColor);

const weight = document.getElementById('weight');

weight.addEventListener('click', changeTabColor);

const volume = document.getElementById('volume');

volume.addEventListener('click', changeTabColor);

const temperature = document.getElementById('temperature');

temperature.addEventListener('click', changeTabColor);

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
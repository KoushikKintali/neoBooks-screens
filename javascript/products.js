const sliderElement = document.getElementById('slider');
const maxValue = document.getElementById('silder-max-value');

sliderElement.oninput = function () {
    maxValue.textContent = this.value;
    this.style.background = `linear-gradient(to right, #DAAA63 0%, #DAAA63 ${this.value}%, #fff ${this.value}%, white 100%)`;
}
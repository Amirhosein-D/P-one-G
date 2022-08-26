// slider one ):
const homeSlider = document.createElement('div');
homeSlider.classList.add('homeSlider');

homeSlider.innerHTML = `
<div class="sliderOne">
Smoke A Cigarette
</div>

<div class="sliderTow noFilter">
And
</div>

<div class="sliderThree">     
Drink A Wine
</div>
`;

const home = document.querySelector('.home');
home.append(homeSlider);



const sliderOne = document.querySelector('.sliderOne');
const sliderTow = document.querySelector('.sliderTow');
const sliderThree = document.querySelector('.sliderThree');

const sliders = [sliderOne , sliderTow , sliderThree];


sliders.forEach(slider => {
    slider.addEventListener('click' , () => {
        cealerSliders()
        slider.classList.add('noFilter');
    })
});

function cealerSliders() {
    sliders.forEach(slider => {
        slider.classList.remove('noFilter');
    })
}
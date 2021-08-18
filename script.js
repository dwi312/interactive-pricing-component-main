const slidePricing = document.querySelector('.slide__pricing');
const valuePricing = document.querySelector('.value-pricing');

slidePricing.addEventListener('input', (e) => {
    // console.log(slidePricing.value)
    // slidePricing.checked == true;
    pricing = slidePricing.value;
    // console.log(pricing)
    var color = 'linear-gradient(90deg, var(--soft-cyan)' + pricing + '%, var(--light-grayish-blue)' + pricing + '%)';
    slidePricing.style.background = color;

    var vl = (pricing * 32) / 100;
    console.log(vl)
    valuePricing.innerText = `$ ${vl}`;
})



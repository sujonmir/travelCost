let people = document.getElementById('people');
let days = document.getElementById('days');
let motorBike = document.getElementById('motorBike');
let smallCar = document.getElementById('smallCar');
let largeCar = document.getElementById('largeCar');
let motorHome = document.getElementById('motorHome');
let pickUp = document.getElementById('pickup');
let dropOff = document.getElementById('dropoff');
let estimateShow = document.getElementById('estimateShow');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let carRent = 0;
let petrolPrice = 0;
let petrolPricePerLitter = 2.40;
let mileage = 0;

motorBike.addEventListener('click', function() {
    motorBike.classList.add('bgbtn')
    smallCar.classList.remove('bgbtn')
    largeCar.classList.remove('bgbtn')
    motorHome.classList.remove('bgbtn')
    carRent = 109
    mileage = 3.7
})
smallCar.addEventListener('click', function() {
    motorBike.classList.remove('bgbtn')
    smallCar.classList.add('bgbtn')
    largeCar.classList.remove('bgbtn')
    motorHome.classList.remove('bgbtn')
    carRent = 129
    mileage = 8.5
})
largeCar.addEventListener('click', function() {
    motorBike.classList.remove('bgbtn')
    smallCar.classList.remove('bgbtn')
    largeCar.classList.add('bgbtn')
    motorHome.classList.remove('bgbtn')
    carRent = 144
    mileage = 9.7

})
motorHome.addEventListener('click', function() {
    motorBike.classList.remove('bgbtn')
    smallCar.classList.remove('bgbtn')
    largeCar.classList.remove('bgbtn')
    motorHome.classList.add('bgbtn')
    carRent = 200
    mileage = 17
})
setInterval(function() {
    if (people.value == 6) {
        motorBike.disabled = true;
        smallCar.disabled = true;
        largeCar.disabled = true;
        motorHome.disabled = false;
    }
    if (people.value == 3 || people.value == 4 || people.value == 5) {
        motorBike.disabled = true;
        smallCar.disabled = true;
        largeCar.disabled = false;
        motorHome.disabled = false;
    }
    if (people.value == 2) {
        motorBike.disabled = true;
        smallCar.disabled = false;
        largeCar.disabled = false;
        motorHome.disabled = false;
    }
    if (people.value == 1) {
        motorBike.disabled = false;
        smallCar.disabled = false;
        largeCar.disabled = false;
        motorHome.disabled = true;
    }


}, 1);

$(document).ready(function() {
    $('#estimate').click(function() {
        if (pickup.value == 'akl' && dropOff.value == 'wlt' || pickup.value == 'wlt' && dropOff.value == 'akl') {
            petrolPrice = (((mileage * 681) / 100) * petrolPricePerLitter)
        } else if (pickup.value == 'wlt' && dropOff.value == 'npr' || pickup.value == 'npr' && dropOff.value == 'wlt') {
            petrolPrice = (((mileage * 320) / 100) * petrolPricePerLitter)
        } else if (pickup.value == 'akl' && dropOff.value == 'npr' || pickup.value == 'npr' && dropOff.value == 'akl') {
            petrolPrice = (((mileage * 409) / 100) * petrolPricePerLitter)
        } else {
            alert('Use different pick-up and drop-off value')
            return false;
        }
        petrolPrice = parseFloat(petrolPrice)
        const totalPrice = (carRent * days.value) + (petrolPrice * days.value)
        if (totalPrice == 0) {
            return false
        }
        estimateShow.innerText = `Total Estimated Price: $${totalPrice.toFixed(2)}`

    });

});
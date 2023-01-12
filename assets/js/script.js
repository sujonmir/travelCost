let people = document.getElementById('people');
let days = document.getElementById('days');
let motorBike = document.getElementById('motorBike');
let smallCar = document.getElementById('smallCar');
let largeCar = document.getElementById('largeCar');
let motorHome = document.getElementById('motorHome');
let pickUp = document.getElementById('pickup');
let dropOff = document.getElementById('dropoff');
let estimateShow = document.getElementById('estimateShow');
let carRent = 0;
let petrolPrice = 0;
let petrolPricePerLitter= 2.40;
let mileage= 0;

motorBike.addEventListener('click', function() {
    motorBike.classList.add('bgbtn')
    smallCar.classList.remove('bgbtn')
    largeCar.classList.remove('bgbtn')
    motorHome.classList.remove('bgbtn')
    carRent = 109
    mileage= 3.7
})
smallCar.addEventListener('click', function() {
    motorBike.classList.remove('bgbtn')
    smallCar.classList.add('bgbtn')
    largeCar.classList.remove('bgbtn')
    motorHome.classList.remove('bgbtn')
    carRent = 129
    mileage= 8.5
})
largeCar.addEventListener('click', function() {
    motorBike.classList.remove('bgbtn')
    smallCar.classList.remove('bgbtn')
    largeCar.classList.add('bgbtn')
    motorHome.classList.remove('bgbtn')
    carRent = 144
    mileage= 9.7

})
motorHome.addEventListener('click', function() {
    motorBike.classList.remove('bgbtn')
    smallCar.classList.remove('bgbtn')
    largeCar.classList.remove('bgbtn')
    motorHome.classList.add('bgbtn')
    carRent = 200
    mileage= 17
})


$(document).ready(function() {
    $('#estimate').click(function() {
        if (pickup.value == 'akl' && dropOff.value == 'wlt' || pickup.value == 'wlt' && dropOff.value == 'akl' ) {
            petrolPrice = (((mileage * 681) / 100)*petrolPricePerLitter)
        }else if (pickup.value == 'wlt' && dropOff.value == 'npr' || pickup.value == 'npr' && dropOff.value == 'wlt' ) {
        	petrolPrice = (((mileage * 320) / 100)*petrolPricePerLitter)
        }else if(pickup.value == 'akl' && dropOff.value == 'npr' || pickup.value == 'npr' && dropOff.value == 'akl' ) {
        	petrolPrice = (((mileage * 409) / 100)*petrolPricePerLitter)
        }else{
        	alert('Use different pick-up and drop-off value')
        	return false;
        }
        petrolPrice= parseFloat(petrolPrice)
        const totalPrice = (carRent * days.value) + petrolPrice
        if(totalPrice==0){
        	return false
        }
        estimateShow.innerText= `Total Estimated Price: $${totalPrice.toFixed(2)}`

    });

});
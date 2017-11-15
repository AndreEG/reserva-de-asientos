/*var firstClass = document.getElementsByClassName('first-seat');
var arrayFirstClass = Array.from(firstClass);

var economicClass = document.getElementsByClassName('economic');
var arrayEconomicClass = Array.from(economicClass);
*/
var airplaneSeat = [
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
];

var busySeat = 0;
var paintSeat = function(Array) {
    for(var i = 0; i < Array.length; i++);
    var seat='';
    if(i<4){
        seat=document.getElementsByClassName('seats')[i];
    } else {
        seat=document.getElementsByClassName('seats')[i];
    }
    console.log('no se');
}

paintSeat(airplaneSeat);

var reserve = function(){
    var btn = document.getElementById('reserve');
    btn.addEventListener("click",chooseZone);
}

var chooseZone = function(){
    var choise = prompt('En que zona prefieres reservar? \n 1.Primera Clase \n 2.Económica \n \n Por favor ingrese un número');
    if(choise == 1) {
        firstZone()
    }else if(choise == 2){
        economicZzone()
    }else {
        alert('por favor ingresa un numero valido')
    }
};

var firstZone = function() {
    var zone = 'primera clase';
    for(var j = 0; j<4; j++){
        if(airplaneSeat[j]==false){
            airplaneSeat[j]=true;
            reserveSeat(j);
            break;
        }else if(j==3 && airplaneSeat[j]==true){
            reasingEconomic(zone);
        }
    }
}

var economicZzone = function() {
    var zone = 'economica';
    for(var j = 4; j<10; j++){
        if(airplaneSeat[j]==false){
            airplaneSeat[j]=true;
            reserveSeat(j);
            break;
        }else if(j==9 && airplaneSeat[j]==true){
            reasingFirstClass(zone);
        }
    }
}

var reserveSeat = function(indexToPaint){
    var seat=document.getElementsByClassName('seats');
    seat[indexToPaint].textContent ='◙'
}

var reasingEconomic = function(zone){
    var reasing = confirm(
        'ya no quedan asientos disponibles en '+ zone + ':( \n Quieres reservar en zona económica?'
    )
    if (reasing == true) {
        economicZzone();
    }else{
        nextFlight();
    }
}
var reasingFirstClass = function(zone){
    var reasing = confirm(
        'ya no quedan asientos disponibles en '+ zone + ':( \n Quieres reservar en primera clase?'
    )
    if (reasing == true) {
        firstZone();
    }else{
        nextFlight();
    }
}

var nextFlight = function(){
    alert('nuestro proximo vuelo sale en 3 horas');
}
reserve();
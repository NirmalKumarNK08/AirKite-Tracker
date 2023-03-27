var lat = localStorage.getItem("lat");
var lng = localStorage.getItem("lng");

var f_num = localStorage.getItem("flight_iata");

console.log(f_num);

console.log(lat, lng);

localStorage.removeItem("flight_iata");
localStorage.removeItem("lat");
localStorage.removeItem("lng");

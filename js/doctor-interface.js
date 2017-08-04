const Doctor = require('./../js/doctor.js').DoctorModule;
const apiKey = require('./../.env').apiKey;

function displayDefault(firstName, lastName, ){

}

$(document).ready(function(){
  const doctor = new Doctor();
  doctor.findDoctor("");
});

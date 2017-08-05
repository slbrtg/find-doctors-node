const Doctor = require('./../js/doctor.js').DoctorModule;
const apiKey = require('./../.env').apiKey;

function displayData(fullName, specialties, offices){
  let specialtiesString = specialties.join(",");
  let officesString = offices.join("<br>");
  $('.doctors').append(
    "<div class = 'doctor'>" +
    "<h1>Dr." +
    fullName +
    "</h1>" +
    "<h2>Specialty: " +
    specialtiesString +
    "</h2>" +
    "<h3>Office Information: " +
    officesString +
    "</h3><hr></div>");
}

$(document).ready(function(){
  const doctor = new Doctor();
  doctor.findDoctor("", displayData);
});

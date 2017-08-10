const Doctor = require('./../js/doctor.js').DoctorModule;
const apiKey = require('./../.env').apiKey;

function displayData(fullName, specialties, offices){
  const specialtiesString = specialties.join(",");
  const officesString = offices.join("<br>");
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
  $("#search").click(function(){
    const location = $('.city').val();
    console.log(location);
    $('.doctors').empty();
    doctor.findDoctor("", location, displayData);
  });
});

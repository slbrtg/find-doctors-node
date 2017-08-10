const apiKey = require('./../.env').apiKey;

function Doctor(){

}

Doctor.prototype.findDoctor = function(medicalIssue,location,displayData){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+
  medicalIssue +
  '&location=' +
  location + '&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      let fullName = "";
      let specialties = [];
      let offices = [];
      for (let x = 0; x <= 19; x++){
        let specialtiesLength = 0;
        let officesLength = 0;
        fullName = result.data[x]["profile"]["first_name"] +
        " " +
        result.data[x]["profile"]["last_name"];

        for (let y = 0; y <= specialtiesLength; y++){
          specialties.push(result.data[x]["specialties"][y]["name"]);
        }
        for (let z = 0; z <= officesLength; z++){
          offices.push(result.data[x]["practices"][z]["name"]);
          offices.push(result.data[x]["practices"][z]["location_slug"]);
        }
        displayData(fullName, specialties, offices);
        specialties = [];
        offices = [];
      }
    })
   .fail(function(error){
      $('.doctors').append("<h1>There was an error pulling all doctor information</h1>");
    });
};
exports.DoctorModule = Doctor;

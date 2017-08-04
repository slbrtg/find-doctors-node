const apiKey = require('./../.env').apiKey;

function Doctor(){

}

Doctor.prototype.findDoctor = function(medicalIssue){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      let fullName = "";
      let specialties = [];
      let offices = [];
      for (let x = 0; x < 20; x++){
        fullName = result.data[x]["profile"]["first_name"]
        + " " + result.data[x]["profile"]["last_name"];

        for (let y = 0; y < result.data[0]["specialties"].length; y++){
          specialties.push(result.data[x]["specialties"][y]["name"]);
        }
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};
exports.DoctorModule = Doctor;

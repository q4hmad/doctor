const apiKey = require('./../.env').apiKey;

export class Doctor {
 constructor() {

 }
  callApi(issue) {
    let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&user_key=${apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    let data = body.data;
    data.forEach(function(doctor) {
      let profile = doctor.profile;
      let name = profile.first_name + ' ' + profile.last_name + " " + profile.title;
      let practices = doctor.practices[0].visit_address;
      let city = practices.city;
      let state = practices.state;
      let zip = practices.zip;
      let address = city + " " + state +  " "+ zip;
      let newPatients = doctor.practices[0].accepts_new_patients;
      let phone = doctor.practices[0].phones[0];
      let phoneNumber = phone.number;
      let docArray = [name, address, phoneNumber];
      $("#resultIssue").append( "Name:<h6>" + name + "</h6>");
      $("#resultIssue").append( "Address:<h6>" + address + "</h6>");
      $("#resultIssue").append( "Phone:<h6>" + phoneNumber + "</h6>");
      if(newPatients === true){
        $("#resultIssue").append("We are currently accepting new patients.   ");
      } else {
        $("#resultIssue").text(`There are no results for this ${issue}. Please try again using different search terms.`);
      }
    }),
    (function(error) {
      $('#showErrors').text(`There was an error processing your request:  ${error.message}`);
    })
  });
 }
}

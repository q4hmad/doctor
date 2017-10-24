let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    let issue  = $("#issue").val();
    let docName  = $("#name").val();

    let promise =  new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&&location=45.4814320%2C-122.8016600%2C50&skip=0&limit=10&user_key=${apiKey}`;

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
        let name = profile.title + ' ' +profile.first_name + ' ' + profile.last_name;
        let practices = doctor.practices[0].visit_address;
        let city = practices.city;
        let state = practices.state;
        let zip = practices.zip;
        let address = city + " " + state +  " "+ zip;
        // console.log(address);
        let newPatients = doctor.practices[0].accepts_new_patients;
        let phone = doctor.practices[0].phones[0];
        let phoneNumber = phone.number;
        let docArray = [name, address, phoneNumber];
        $("#resultIssue").append( "Name:<h6>" + name + "</h6>");
        $("#resultIssue").append( "Address:<h6>" + address + "</h6>");
        $("#resultIssue").append( "Phone:<h6>" + phoneNumber + "</h6>");
/////////////////////////////////////////if else///////////////
        if(newPatients === true){
          $("#resultIssue").append("We are currently accepting new patients.     ");
        } else {
          $("#resultIssue").text(`There are no results for this ${issue}. Please try again using different search terms.`);
        }
/////////////////////////////////////////if else///////////////
      }),
        (function(error) {
            $('#showErrors').text(`There was an error processing your request:  ${error.message}`);
        })
  });
});
});


// docArray.forEach(function(info) {
//   console.log(docArray);





// console.log(docArray);
// console.log(phoneNumber);


// let array = [name, city, state, zip];
// console.log(array);



// console.log(phone);
// console.log(phone.number);
// console.log(practices.city);

// if(newPatients === true) {
// let patients = "Accepting new patients."
//   return patients;
// }
// console.log(city, state, zip, phone);
//

// // console.log(phone.number);
// $("#resultIssue").append(name + practices + phone.number);

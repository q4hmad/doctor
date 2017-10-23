

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    let issue  = $("#issue").val();
    let docName  = $("#name").val();
    let promise =  new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&&location=45.4814320%2C-122.8016600%2C50&skip=0&limit=10&user_key=${appKey}`;

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
        // console.log(practices);
        let newPatients = doctor.practices[0].accepts_new_patients;
        // console.log(newPatients);
        let phone = doctor.practices[0].phones;
        console.log(phone);
        $('#resultIssue').append(name);
        $("#resultAddress").append(`${practices.street} ${practices.city} ${practices.state}`);
        $("#resultPhoneNumber").append(phone);
        $("#resultNewPatient").append(newPatients);
      } else {
        $("#resultIssue").text(`There are no results for this ${issue}. Please try again using different search terms.`);

    }, (function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    });
   });
  });
});

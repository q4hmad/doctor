

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    let issue  = $("#issue").val();


    let promise =  new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&name=${name}&location=%20or-portland&user_location=37.773%2C-122.413&skip=0&limit=5&user_key=1288d09ed7e0e1d2b0242cfdd73d98c7`;
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
      let data = (body.data);
      data.forEach(function(info) {
        $('#resultIssue').text(`The doctors who treat ${issue} are ${info.practices}`);
        console.log(info.practices);

        $('#resultName').text(`Doctors with the name ${name} ${info.specialty_uid}`);





    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
 });
});

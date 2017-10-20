export class DoctorData {
  constructor() {

  }




makePromise(apiKey){
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = apiKey;
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
}

callApi(promise,issue,docName) {
  promise.then(function(response) {
    let body = JSON.parse(response);
          $("#resultIssue").append(`Issue: ${body.data.practices}`);
          $("#resultName").append(`Name: ${body.data.practices}`)
        }, function(error) {
         $('#showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    }
  }//end of class

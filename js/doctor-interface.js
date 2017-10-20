import {DoctorData } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let doctor = new DoctorData();
    let issue  = $("#issue").val();
    let docName  = $("#name").val();
    let promise = doctor.makePromise(`https://api.betterdoctor.com/2016-03-01/doctors?location=%20or-portland&user_location=37.773%2C-122.413&skip=0&limit=5&user_key=${apiKey}`);


    doctor.callApi(promise, issue, docName, apiKey);
 });
});


import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let doctorSearch = new Doctor();
    doctorSearch.callApi($("#issue").val());
   });
 });

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
  let issue  = $("#issue").val();
  let docName  = $("#name").val();
  let resultIssue = $("#resultIssue").append(issue);
  let resultName = $("#resultName").append(docName);




 });
});

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
  let issue  = $("#issue").val();
  let docName  = $("#name").val();
  let output = $("#output").append(issue, docname);
  console.log(issue);



 });
});

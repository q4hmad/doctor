Doctor Search PDX

An application that allows a user to look up doctors to treat specific medical issues, 10.20.2017

By Qudsia Ahmad

Description

This application makes an API call on the BetterDoctor API to retrieve information about doctors in the Portland area. Users can search doctors by name or medical issue.

Setup/Installation Requirements

Clone the repository, then run the following commands in Terminal:

$ npm install
$ bower install
$ gulp build
$ gulp serve
User Stories

A user can enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
A user can enter a name to receive a list of doctors in the Portland area that fit the search query.
If the query response includes any doctors, a user can see the first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.
If the API call results in an error the user will see a notification that states what the error is.
If no doctors meet the search criteria, the application should return a notification that states that no doctors meet the criteria.
Specifications


Known Bugs

Search requires refreshing the browser each time.  Display is only functional as of now. There is no message if the search returns no results.

Support and contact details

If you have any updates or suggestions please contact q4hmad@gmail.com or make a contribution.

Technologies Used

JavaScript
Node
Bower
License

MIT License

Copyright (c) 2017

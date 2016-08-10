//vars
var message = '';
var student;
var search = 'search';

//functions
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//search code
while ( search.toUpperCase() !== 'QUIT') {
  search = prompt('type a name of a student to get their record. type quit to quito');
  for (var i = 0; i<students.length; i += 1){
    student = students[i];
    if (student.name === search) {
    message = '<h2> Student: ' +student.name + '</h2>';
    message += '<p> track: ' + student.track + '</p>';
    message += '<p> points: ' + student.points + '</p>';
    message += '<p> achievements: ' + student.achievements + '</p>';

  }
          print(message);
}

}

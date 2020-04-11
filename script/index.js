var studentListBody = document.getElementById('student-list-body');
var students;



function render(list) {
    var studentsString = list.map((student, i) => {
        return '<tr><td>' + (i + 1) + '</td><td>' + student.studentId + '</td><td>' + student.name + '</td><td>' + (student.gender? 'Male':'Female') + '</td><td>' + student.class + '</td><td>' + student.section + '</td><td>' + student.email + '</td><td>' + student.birthDate + '</td><td>' + student.phone + '</td><td>' + student.adress + '</td><td><i class="far fa-eye icon" data-id="' + student.id + '" data-purpose="view"></i><i class="fas fa-edit icon" data-id="' + student.id + '" data-purpose="modify"></i><i class="far fa-trash-alt icon" data-id="' + student.id + '" data-purpose="delete"></i></td></tr>';
    });
    studentListBody.innerHTML = studentsString.join('');
}

document.body.onload = function() {
    axios.get('http://localhost:8009/students')
    .then(function(res) {
        students = res.data;
        render(students);
    })
    .catch(function(error) {
        console.log(error);
    });
}
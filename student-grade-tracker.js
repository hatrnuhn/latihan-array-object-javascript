const students = [];
function addStudent(name, id, grades) {
    const newStudent = {
        name: name,
        id: id,
        grades: grades
    };

    students.push(newStudent);
}   

function calculateAverageGrade(id) {
    const student = students.find(student => student.id === id);
    if (student) {
        const sum = student.grades.reduce((total, grade) => total + grade, 0);
        const average = sum / student.grades.length;
        console.log("Rata-rata nilai untuk siswa dengan ID " + id + " adalah: " + average.toFixed(2));
    } else {
        console.log("Siswa dengan ID " + id + " tidak ditemukan.");
    }
}   

function findMinMaxGrade(id) {
    let student = students.find(student => student.id === id);
    if (student) {
        let maxGrade = Math.max(...student.grades);
        let minGrade = Math.min(...student.grades);
        console.log("Nilai tertinggi untuk siswa dengan ID " + id + " adalah: " + maxGrade);
        console.log("Nilai terendah untuk siswa dengan ID " + id + " adalah: " + minGrade);
    } else {
        console.log("Siswa dengan ID " + id + " tidak ditemukan.");
    }
}   

addStudent("John Doe", 12345, [85, 90, 92, 88]);
addStudent("Jane Smith", 67890, [75, 80, 82, 78]);

calculateAverageGrade(12345);
findMinMaxGrade(67890);

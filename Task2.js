// Function to grade students based on marks
function gradeStudent(marks) {
    if (marks > 90) {
        console.log("A Grade");
    } else if (marks >= 70 && marks <= 90) {
        console.log("B Grade");
    } else if (marks >= 50 && marks < 70) {
        console.log("C Grade");
    } else {
        console.log("F Grade");
    }
}

// Example usage:
let studentMarks = 85;
gradeStudent(studentMarks);

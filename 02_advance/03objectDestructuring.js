const course = {
    courseName: "programming",
    price: 150,
    courseInstructor: "kishor"
}

//console.log(course["courseInstructor"]);

const {courseInstructor: teacher} = course
console.log(teacher);
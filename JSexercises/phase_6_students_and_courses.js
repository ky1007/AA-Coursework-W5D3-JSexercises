function Student(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.courses = [];
}

function Course(name, department, credits) {
  this.students = [];
  this.name = name;
  this.department = department;
  this.credits = credits;
}

Student.prototype.name = function () {
  return `${this.first_name} ${this.last_name}`;
};

Student.prototype.enroll = function(course) {
  this.courses.push(course);
  course.students.push(this);
};

Student.prototype.courseload = function() {
  let dept = {};
  this.courses.forEach(function(course) {
    if (dept.hasOwnProperty(course)) {
      (dept[course] += course.credits);
    } else {
      (dept[course] = course.credits);
    }      
  });
  return dept;
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

let s1 = new Student("Greg", "Park");
let s2 = new Student("Kevin", "Yang");
let c1 = new Course("Defense Against the Dark Arts", "Magic", 5);
let c2 = new Course("Defense Against the Light Arts", "Magic", 6);

s1.enroll(c1);
s2.enroll(c2);
s2.enroll(c1);

// console.log(s2.courseload());
console.log(s1.courses);
console.log(s2.courses);
// console.log(s2.first_name);
console.log(c1.students[0].first_name);
console.log(c2.students[0].first_name);

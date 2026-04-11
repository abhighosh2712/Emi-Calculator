class Student {

constructor(_name, _age, _grade) {
  this.name = _name;
  this.age = _age;
  this.grade = _grade;
  console.log("Student created");
  console.log("Name:", this.name);
  console.log("Age:", this.age);
  console.log("Grade:", this.grade);
}


}


let s1=new Student('Abhi', 20, 'A');
let s2=new Student('Ravi', 40, 'B');
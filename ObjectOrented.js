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

    getDetails() {
      return this.name + " is " + this.age + " years old and has grade " + this.grade;
    }
    setName(newName) {
      this.name = newName;
    }
    getName() {
      return this.name;
    }

}
let s1=new Student('Abhi', 20, 'A');
s1.setName('Ramesh');
var name=s1.getName();
console.log("Name:", name);

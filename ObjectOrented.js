
class Father{

  constructor(name){
    this.name=name
  }
  getProperty(){
    console.log("name",this.name)
  }
  getALlDetails() {
    console.log("name", this.name);
  }
}


class Child extends Father{
  constructor(name,age){
    super(name)
    this.age=age
  }
}

let child1=new Child("sachin",30)
child1.getProperty()
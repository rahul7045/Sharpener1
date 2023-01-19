const product=(a,b)=>{
   return a*b;
}

//console.log(product(3,4))
const Student = {
    name : "Rahul",
    age : 22,
    greetarrow : ()=>{
      console.log("Hi I am "+this.name);
    },
    greet: function(){
        console.log("Hii I am "+this.name)
    }
}

Student.greet();
Student.greetarrow()
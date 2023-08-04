const person = {
  firstname: "Sejal",
  lastname: "Thakur",
  age: 20,
  location:"Moradabad"
};
person.fullname = function () {
  return this.firstname + " " + this.lastname;
};
document.write("Fullname="+ person.fullname()+"<br> Age="+person.age+"<br> current location= "+ person.location);
//overwriting attribute
person.location="Gurugram";
document.write("<br> location after change is.." + person.location);
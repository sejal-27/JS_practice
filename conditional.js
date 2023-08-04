let age = 18;

if (age >= 18) {
  output = "Eligble to vote as the age is \t" + age;
} else {
  output = "Not eligble to vote as the age is" + age + "and it's less than 18.";
}
document.write(output);

switch (age >= 18) {
  case true:
    document.write("<br> eligible");
    break;
  case false:
    document.write("<br> uneligible");
    break;
  default:
    document.write("<br> wrong input");
}

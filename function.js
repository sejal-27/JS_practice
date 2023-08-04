let celsius = 34;
function temp_conversion(celsius) {
  return (celsius * 9) / 5 + 32;
}
let fahrenheit = temp_conversion(celsius);
document.write("temprature in celsius=" + celsius);
document.write("<br>temprature in fahrenheit=" + fahrenheit);

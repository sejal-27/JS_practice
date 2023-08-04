const marks = [76, 98, 23, 56, 35];
let x = marks.length;
console.log(x);
for (i = 0; i < x; i++) {
  marks[i] = marks[i] - 10;
}
document.write("array after updation is");
document.write("<br>");
for (i = 0; i < x; i++) {
  document.write(marks[i] + "\t");
}

//arranging updated array in ascending order
document.write("<br>");
marks.sort();
for (i = 0; i < x; i++) {
  document.write(marks[i] + "\t");
}

//reversing it
document.write("<br>");
marks.reverse();
for (i = 0; i < x; i++) {
  document.write(marks[i] + "\t");
}
document.write("<br>");

//using fill function(adds the value between given range)
marks.fill(0, 2, 5);
for (i = 0; i < x; i++) {
  document.write(marks[i] + "\t");
}

//using slice function(makes a new array using existing array)
let marks_2 = marks.slice(2, 5);
document.write("<br>");
for (i = 0; i < 3; i++) {
  document.write(marks_2[i] + "\t");
}

//using unshift--to add new elements in beginning
marks_2.unshift(20, 49, 58);
document.write("<br>");
for (i = 0; i < marks_2.length; i++) {
  document.write(marks_2[i] + "\t");
}

//using pop--to remove elements from the end
marks_2.pop();
document.write("<br>");
for (i = 0; i < marks_2.length; i++) {
  document.write(marks_2[i] + "\t");
}

//using push--to add elements to the ending
marks_2.push(39, 54, 34, 23, 87);
document.write("<br>");
for (i = 0; i < marks_2.length; i++) {
  document.write(marks_2[i] + "\t");
}

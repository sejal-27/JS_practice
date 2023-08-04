function uppercase() {
  const x = document.getElementById("name");
  x.value = x.value.toUpperCase();
  x.style.backgroundColor = "yellow";
}
function onFocus() {
  const y = document.getElementById("name");
  y.style.border = "2";
  y.style.scale = "1.05";
  y.style.marginLeft="3";
}

function press() {
  const z = document.getElementById("mouse_event");
  z.innerHTML = "hello!";
  z.style.backgroundColor = "green";
  z.style.color = "white";
  z.style.textTransform = "uppercase";
}
function release() {
  const z = document.getElementById("mouse_event");
  z.innerHTML = "press to display message";
  z.style.backgroundColor = "red";
}

function hover() {
  const z = document.getElementById("mouse_event_2");
  z.innerHTML = "namaste";
  z.style.backgroundColor = "green";
  z.style.color = "white";
  z.style.textTransform = "uppercase";
}
function unhover() {
  const z = document.getElementById("mouse_event_2");
  z.innerHTML = "hover again to display message";
  z.style.backgroundColor = "yellow";
  z.style.color = "black";
  z.style.textTransform = "uppercase";
}

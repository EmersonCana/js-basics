function greet(name) {
  document.getElementById("demo").innerHTML = "Hello " + name;
}

function compute(a, b, c) {
  document.getElementById("section2").innerHTML = a + b + a;
}

function generate(m = "Fakebutton is Clicked!") {
  document.getElementById("demo").innerHTML = m;
}

function showKeyDown() {
  let input = document.getElementById("textInput").value;
  document.getElementById("demo").innerHTML = input;
}

function loadValue() {
  document.getElementById("demo").innerHTML = "10";
}

function decrement() {
  let num = parseInt(document.getElementById("demo").innerHTML);
  let newNum = num - 1;

  document.getElementById("demo").innerHTML = newNum;
}

function increment() {
  let num = parseInt(document.getElementById("demo").innerHTML);
  let newNum = num + 1;

  document.getElementById("demo").innerHTML = newNum;
}

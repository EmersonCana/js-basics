function meterToCm() {
  let meter = document.getElementById("meter").value;
  let cm = meter * 100;
  document.getElementById("centimeter").value = cm;
}

function kilosToPounds() {
  let kilos = document.getElementById("kilos").value;
  let lbs = kilos * 2.2;
  document.getElementById("pounds").value = lbs;
}

function kilometersToYard() {
  let kilometers = document.getElementById("kilometers").value;
  let yard = kilometers * 1093.613298;
  document.getElementById("yard").value = yard;
}

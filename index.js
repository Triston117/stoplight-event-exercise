let redButton = document.getElementById("stopButton");
let yellowButton = document.getElementById("slowButton");
let greenButton = document.getElementById("goButton");
let redLight = document.getElementById("stopLight");
let yellowLight = document.getElementById("slowLight");
let greenLight = document.getElementById("goLight");
console.log(redButton, redLight);
redButton.addEventListener("click", function () {
  redLight.classList.toggle("stop");
});
redButton.addEventListener("mouseenter", function () {
  console.log(`entered ${stopButton.textContent} button`);
});
redButton.addEventListener("mouseleave", function () {
  console.log(`left ${stopButton.textContent} button`);
});
yellowButton.addEventListener("click", function () {
  yellowLight.classList.toggle("slow");
});
yellowButton.addEventListener("mouseenter", function () {
  console.log(`entered ${slowButton.textContent} button`);
});
yellowButton.addEventListener("mouseleave", function () {
  console.log(`left ${slowButton.textContent} button`);
});
greenButton.addEventListener("click", function () {
  greenLight.classList.toggle("go");
});
greenButton.addEventListener("mouseenter", function () {
  console.log(`entered ${goButton.textContent} button`);
});
greenButton.addEventListener("mouseleave", function () {
  console.log(`left ${goButton.textContent} button`);
});
//Holy crap this works

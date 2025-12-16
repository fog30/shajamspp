const names = [
  "James","Margaret","Muriel","Fergal",
  "Jess","Hilda","Giles","Shannon","Anna",
  "Treza","Alister","Contrad"
];

const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

let i = 0;

// spinning animation
const spin = setInterval(() => {
  wheel.innerText = names[i % names.length];
  i++;
}, 120);

// ⛔ FORCE RESULT HERE
setTimeout(() => {
  clearInterval(spin);

  wheel.innerText = "James";
  result.innerText = "🎁 You got: James";

}, 3000);

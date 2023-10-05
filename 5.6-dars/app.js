// let h1 = document.getElementById('title')
// console.log(h1);

const nameEl = document.getElementById("name");

const names = [
  "Jasur",
  "Dostonbek",
  "Jo'rabek",
  "Munisaxon",
  "Murodil",
  "Shavkatbek",
  "Xurshidbek",
  "Abrorbek",
  "Begzod",
];
const colors = [
  "#1AACAC",
  "#FACBEA",
  "#445D48",
  "#D80032",
  "#FFB000",
  "#FF3FA4",
  "#9400FF",
  "#D2DE32",
  "#F6635C",
];
const randomNumbers = Math.trunc(Math.random() * names.length);
const randomnumbercolor = Math.trunc(Math.random() * colors.length);

nameEl.textContent = names[randomNumbers];
nameEl.style.color = colors[randomnumbercolor];
const titleEl = document.getElementById("title2");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

const randomn1 = Math.trunc(Math.random() * 6) + 1;
const randomn2 = Math.trunc(Math.random() * 6) + 1;
image1.src = `./image-${randomn1}.png`;
image2.src = `./image-${randomn2}.png`;
if (randomn1 > randomn2) {
  titleEl.textContent = "player 1 winner ";
  image1.style.backgroundColor = "#6499E9";
} else if (randomn1 < randomn2) {
  titleEl.textContent = "player 2 winner ";
  image2.style.backgroundColor = "#A6F6FF";
} else {
  titleEl.textContent = "Draw!";
  document.getElementById("domino").style.background =
    "linear-gradient(#6499E9,#A6F6FF)";
}

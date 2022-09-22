const buttonOpen = document.querySelectorAll("#btn");
const answer = document.querySelectorAll(".answer");
const imgArrow = document.querySelectorAll(".arrow");
const boldText = document.querySelectorAll(".boldtext");

let x;
function openClose(place) {
  if (x == 1) {
    answer[place].classList.add("answer");
    imgArrow[place].classList.remove("imgArrow");
    boldText[place].classList.remove("bold");
    return (x = 0);
  } else {
    answer[place].classList.remove("answer");
    imgArrow[place].classList.add("imgArrow");
    boldText[place].classList.add("bold");
    return (x = 1);
  }
}

for (let i = 0; i < buttonOpen.length; i++) {
  buttonOpen[i].addEventListener("click", function () {
    openClose(i);
  });
}
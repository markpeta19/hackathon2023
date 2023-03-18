const colors = [
  "#fafa6e",
  "#e0f470",
  "#c7ed73",
  "#aee678",
  "#97dd7d",
  "#81d581",
  "#6bcc86",
  "#56c28a",
  "#42b98d",
  "#2eaf8f",
  "#18a48f",
  "#009a8f",
  "#00908d",
  "#008589",
  "#007b84",
  "#0c707d",
  "#196676",
  "#215c6d",
  "#275263",
  "#2a4858",
];
let index = 0;
const container = document.getElementsByTagName("body");

setInterval(() => {
  const container = document.getElementsByTagName("body");
  if (index === colors.length) {
    index = 0;
  }
  container.style.backgroundColor = colors[index];
  index++;
}, 1000);

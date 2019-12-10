// const progressMoveInit = () => {
//   var button = document.querySelector(".progress-button");
//   var elem = document.getElementById("myBar");
//   var width = 1;
//   var id = setInterval(frame, 10);

//   const frame = () => {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//       elem.innerHTML = width * 1  + '%';
//     }
//   }
// }

export { progressMoveInit };

const progressMoveInit = () => {
  var button = document.querySelector(".progress-button");
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);

  button.addEventListener("click", () => {})
  const frame = () => {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}




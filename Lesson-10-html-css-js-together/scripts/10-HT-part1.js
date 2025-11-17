// const button = document.querySelector(".js-button");
// console.log(button.classList.contains("js-button"));

// function switcherButton() {
//   let switcherStatus = false;
//   let switcherButtonElement = document.querySelector(".js-switcher-button");
//   if (switcherStatus === false) {
//     switcherButtonElement.classList.add("is-toggled");
//     switcherStatus = true;
//     return switcherStatus;
//   } else {
//     switcherButtonElement.classList.remove("is-toggled");
//     switcherStatus = false;
//     return switcherStatus;
//   }
// }

let switcherButton = (selectButton, callback) => {
  const switcherButtonElement = document.querySelector(selectButton);
  console.log(switcherButtonElement);

  if (!switcherButtonElement.classList.contains("is-toggled")) {
    callback();
    switcherButtonElement.classList.add("is-toggled");
  } else {
    switcherButtonElement.classList.remove("is-toggled");
  }
};

let turnOFFButtons = () => {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
};

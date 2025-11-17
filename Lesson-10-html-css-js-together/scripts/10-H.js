function subscribe() {
  //let subscribedButtonElement = document.querySelector('.js-subscription').innerText = 'Subscribed'
  let subscribedButtonElement = document.querySelector(".js-subscription");

  // subscribedButtonElement.innerText === 'Subscribe' ? subscribedButtonElement
  //   .innerText = 'Subscribed' : subscribedButtonElement.innerText = 'Subscribe'
  // subscribedButtonElement.classList.add('is-subscribed')

  if (subscribedButtonElement.innerText === "Subscribe") {
    subscribedButtonElement.innerText = "Subscribed";
    subscribedButtonElement.classList.add("is-subscribed");
  } else {
    subscribedButtonElement.innerText = "Subscribe";

    subscribedButtonElement.classList.remove("is-subscribed");
  }
}

function totalCulc() {
  const costsValueElement = document.querySelector(".js-costs");
  let cost = Number(costsValueElement.value);
  //console.log(costsValueElement.value);
  // console.log(cost);
  // console.log(typeof cost);
  if (cost < 0) {
    document.querySelector(".js-calc-result").classList.add("error-message");
    return (document.querySelector(
      ".js-calc-result"
    ).innerHTML = `Error: cost can not be less than $0`);
  }
  if (cost < 40) {
    cost = cost + 10;
    // console.log(cost);
  }

  document.querySelector(".js-calc-result").innerHTML = `$${cost}`;
}

function handlCostKeydown(event) {
  if (event.key === "Enter") {
    totalCulc();
  }
}

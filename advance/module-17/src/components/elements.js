const topResult = document.querySelector(".top-result"),
      currentResult =  document.querySelector(".current-result"),
      chars = document.querySelector(".exercise"),
      txt = document.querySelector(".text"),
      timerOutput = document.querySelector(".timer"),
      errors = document.querySelector(".amount-err"),
      lng = document.querySelector(".keyboard__lng"),
      keyLangs = Array.from(document.querySelectorAll(".keyboard__lng")),
      press = document.querySelector(".pressed"),
      keys = Array.from(document.querySelectorAll(".btn")),
      buttons = Array.from(document.querySelectorAll(".keyboard__btn"));

lng.classList.add("keyboard__lng--active");

export { topResult, currentResult, chars, txt, timerOutput, errors, lng, keyLangs, press, keys, buttons };
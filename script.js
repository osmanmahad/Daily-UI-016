var popupButton = document.getElementById("popup-button");
var popup = document.getElementById("popup");
var newFactButton = document.getElementById("new-fact-button");
var fact = document.getElementById("fact");
var popupBackground = document.getElementById("popup-background");

popupButton.addEventListener("click", function () {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => {
      var randomFact = data.text;
      fact.innerHTML = randomFact;
      popup.style.display = "grid";
      popupBackground.style.display = "block";
    });
});

newFactButton.addEventListener("click", function () {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => {
      var randomFact = data.text;
      fact.innerHTML = randomFact;
    });
});

document.addEventListener("click", function (event) {
  if (
    event.target != popup &&
    event.target != popupButton &&
    event.target != newFactButton
  ) {
    popup.style.display = "none";
    popupBackground.style.display = "none";
  }
});

var copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", function () {
  var factText = document.getElementById("fact").innerText;
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = factText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  alert("Fact copied to clipboard: " + factText);
  document.body.removeChild(tempInput);
});

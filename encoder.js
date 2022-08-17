window.onload = startFunction;

function startFunction() {
  var thisButton = document.getElementById("doIt");

  thisButton.addEventListener("click", function () {
    const string = document.getElementById("inputText").value;
    // Encode the string using the he package's encode() function

    document.getElementById("output").textContent = encodedStr;
  });
}

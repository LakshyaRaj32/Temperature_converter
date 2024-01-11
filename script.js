// function convertTemperature() {
//     const celInput = document.getElementById("celsius");
//     const resultOutput = document.getElementById("result");
//     const celValue = parseFloat(celInput.value);
//     if (isNaN(celValue)) {
//         resultOutput.textContent = "Invalid input. Please enter a valid number.";
//     } else {
//         const f = (celValue * 9/5) + 32;
//         resultOutput.textContent = "Fahrenheit: " + f.toFixed(2);
//     }
//  }
function convertTemperature() {
    const tempInput = document.getElementById("temperature");
    const resultOutput = document.getElementById("result");
    const tempValue = parseFloat(tempInput.value);
    const conversionType = document.getElementById("conversionType").value;
  
    if (isNaN(tempValue)) {
      resultOutput.textContent = "Invalid input. Please enter a valid number.";
    } else {
      let result;
      if (conversionType === "toFahrenheit") {
        result = (tempValue - 32) * 5/9;
        resultOutput.textContent = `Fahrenheit: ${result.toFixed(2)}`;
      } else {
        result = (tempValue * 9/5) + 32;
        resultOutput.textContent = `Celsius: ${result.toFixed(2)}`;
      }
    }
  }
 
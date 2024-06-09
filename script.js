function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
  
    const celsius = parseFloat(celsiusInput.value);
  
    // Convert to Fahrenheit
    const fahrenheit = (celsius * (9/5)) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  
    // Convert to Kelvin
    const kelvin = celsius + 273.15;
    kelvinInput.value = kelvin.toFixed(2);
  }
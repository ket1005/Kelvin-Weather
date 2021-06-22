    //constant value Kelvin
    const kelvin = 293;
    //convert Kelvin to Celsius
    let celsius;
    celsius=kelvin-273;
    console.log(celsius);//return 20
    //calculations Fahrenheit
    let fahrenheit;
    fahrenheit = celsius*(9/5)+32;    
    console.log(fahrenheit);//return 68
    //to round down the Fahrenheit temperature
    fahrenheit = Math.floor(fahrenheit);
    console.log(fahrenheit);
    console.log('The temperature is ' +fahrenheit+ ' degrees Fahrenheit.');
  
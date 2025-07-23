 //1. Grab DOM Elements
 const input = document.getElementById("inputValue");
  const from = document.getElementById("fromUnit");
   const to = document.getElementById("toUnit");
    const convert = document.getElementById("convertBtn");
     const result = document.getElementById("result");

    //Listen to the button Click
    convert.addEventListener("click",convertUnits);

    //3. Function to handle conversion
    function convertUnits(){
      const value=parseFloat(input.value);
      const fromUnit =from.value;
      const toUnit=to.value;
      //Guard clause: if input is not a nymber

      if(isNaN(value)){
        result.textContent=" ❌ Please enter a valid number.";
        return;
      }
      //4. Conversion Logic
      let convertedValue;
      if(fromUnit===toUnit){
        convertedValue=value; // same unit
    }
    else if (fromUnit==="m" && toUnit==="km")
{
  convertedValue=value/1000;
}else if (fromUnit==="km"&& toUnit==="m"){
  convertedValue=value*1000;
}
else if(fromUnit==="c"&& toUnit==="f"){
  convertedValue=(value*9/5)+32;
}
else if(fromUnit==="f"&& toUnit==="c"){
  convertedValue=(value-32)*5/9;
}
else if(fromUnit==="kg"&& toUnit==="lb"){
  convertedValue=value*2.20462;
}
else if (fromUnit==="lb"&& toUnit==="kg"){
  convertedValue=value/2.20462;
}
else{
  result.textContent="❌Conversion not supported"
  return;
}
//5. Show result
result.textContent = `${value} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
    }
//wap that provide us the desired temperature notation from any temperature we provide
let num1=Number(prompt('enter the number'));
let unit= prompt(`WHAT unit IS THIS`);
let changed_unit=prompt(`in which value do you want`)

if (unit=="c")
{
    if (changed_unit=="k"){
      let output=num1+273;
      console.log(output)
        
    }
    else if (changed_unit=="f"){
        output=(num1 * 9/5) + 32;
        console.log(output)
    }
}  
else if (unit=="k"){
    if(changed_unit=="c"){
      output=num1-273.15
      console.log(output)
    }
    else if (changed_unit=="f"){
      output=((num1-273.15)*9/5+32);
         console.log(output)
    }
}
else if (unit=="f"){
    if(changed_unit=="c"){
        output=num1-32*5/9
        console.log(output)
        } 
        else if (changed_unit=="k"){
            output=num1-32*5/9+273.15
            console.log(output)
        }
    }
else {
    console.log(`you need to convert to other unit`);
}


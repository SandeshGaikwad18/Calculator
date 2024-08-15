const display=document.getElementById("number-display");



function  appendToDisplay(input){
  display.value += input;    
}


function  clearDisplay(){
   display.value="";
}



function calculate(){
  try{
    
    display.value=eval(display.value);
  }
  catch(error){
    display.value="Invalid";
  }
}
//CALCULATOR

const display =document.getElementById("display");

let flag=0;

function appendToDisplay(input){
    if(flag){
        display.value="";
        flag=0;
    }   
    display.value += input;   

}
function backSpace(){
   display.value= display.value.slice(0,-1);
}
function clearDisplay(){
    display.value = "" ;
}
function calculate(){
    try{
        display.value = eval(display.value);
        flag=1;
    }
    catch(Error){
        display.value = "Error";
        flag=1;
    }
   
}
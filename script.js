const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR!";
    }


}

function backspace(){
    if(display.length > 0){
        display = display.slice(0,-1);
        display.value = display;
    }
}


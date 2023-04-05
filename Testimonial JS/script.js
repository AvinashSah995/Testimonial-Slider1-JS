var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function ()  {

    if(x > "-900") {
        x = x - 300;
        slide.style.top = x + "px";
    } else {
        x = 0;
        slide.style.top = x + "px";
    }
    
}

downArrow.onclick = function ()  {

    if(x < "0") {
        x = x + 300;
        slide.style.top = x + "px";
    } else {
        x = -900;
        slide.style.top = x + "px";
    }
    
}

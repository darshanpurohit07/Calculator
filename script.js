const display=document.getElementById('display');

function append(input)
{
    if(display.value=="Error")
    {
        display.value="";
    }
    display.value+=input;
}
function clearscreen()
{
    display.value="";
}
function calculate()
{
    try{
        display.value=eval(display.value);
    }
    catch(err){
        display.value="Error";
    }

}
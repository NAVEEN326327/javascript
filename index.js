var numberOfDrumButtons = document.querySelector(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelector(".drum")[i].addEventListener("click", function() {
alert("I got clicked");
});

}
    

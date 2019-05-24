var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
     var audio = new Audio('top-1.mp3');
     audio.play();
});

}
    
var me={
    name: "Naveen Kumar Sharma", 
    age: 22,
    qualification: btech,

}
alert(me.name);
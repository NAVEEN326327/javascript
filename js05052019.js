function validation()
{
    var result= true;
    var x=document.getElementsByName("name");
   
    if(x[0].value.length=="")
       {
           alert("please enter your name");
           return false;
       }
       var x=document.getElementsByName("pass");
       if(x[0].value.length=="")
       {
           alert("password should not be empty");
           return false;
       }
       
       var x=document.getElementsByName("phone_no")[0];
       if(x.value.length<2 || x.value.length>10)
       {
            alert("phone no. lenght should not be between 1-10");
            return false;
       }
       var x=document.getElementsByName("email");
       var adressOfAt=x.indexOf("@");
       if(adressOfAt<2)
       {
           alert("please enter correct email");
       }



       
}
function backgroundColor()
{
    document.body.style.backgroundColor ="blue" ;
}
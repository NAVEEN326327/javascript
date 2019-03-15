function validation()
{
    var result=true;
    var e=document.getElementsByName("email")[0].nodeValue;
    var atindex=e.indexOf("@");
    var dotindex=e.lastIndexOf('.');
    if(atindex<1 || dotindex>e.length-2 || dotindex-atindex<3)
           result=false;
}
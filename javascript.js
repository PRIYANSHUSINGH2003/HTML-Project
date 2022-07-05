var h2=document.getElementById("h2");
  h2.onclick =function() 
{
    if (h2.className =="rounded-pill border border-4 border-danger text-dark text-center py-2 display-6 fw-bold bg-warning") 
    {
        h2.className = "rounded-pill border border-4 border-warning text-danger text-center py-2 display-6 fw-bold text-decoration-underline bg-dark";
    }

    else
    {
        h2.className = "rounded-pill border border-4 border-danger text-dark text-center py-2 display-6 fw-bold bg-warning";
    }
}
function clearErrors0()
{
    errors=document.getElementsByClassName("formerror0");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function clearErrors1()
{
    errors=document.getElementsByClassName("formerror1");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function clearErrors2()
{
    errors=document.getElementsByClassName("formerror2");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function clearErrors3()
{
    errors=document.getElementsByClassName("formerror3");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function clearErrors4()
{
    errors=document.getElementsByClassName("formerror4");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function clearErrors5()
{
    errors=document.getElementsByClassName("formerror5");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function clearErrors6()
{
    errors=document.getElementsByClassName("formerror6");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function clearErrors7()
{
    errors=document.getElementsByClassName("formerror7");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function seterror0(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror0")[0].innerHTML=error;
}
function seterror1(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror1")[0].innerHTML=error;
}
function seterror2(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror2")[0].innerHTML=error;
}
function seterror3(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror3")[0].innerHTML=error;
}
function seterror4(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror4")[0].innerHTML=error;
}
function seterror5(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror5")[0].innerHTML=error;
}
function seterror6(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror6")[0].innerHTML=error;
}
function seterror7(id,error)
{
   element=document.getElementById(id);
   element=document.getElementsByClassName("formerror7")[0].innerHTML=error;
}
function validation()
{ 
    var returnval=true;
    clearErrors0();
    clearErrors1();
    clearErrors2();
    clearErrors3();
    clearErrors4();
    clearErrors5();
    clearErrors6();
    clearErrors7();
    var name=document.forms['myForm']["Fname"].value;
    if(name.length<5){
        seterror0("name","Length of name is too short");
        returnval=false;
    
    }
    var lname=document.forms['myForm']["Lname"].value;
    if(lname.length<5)
    {
        seterror1("lname","*Length Last name is too short");
        returnval= false;
    }
    if(lname.length==0)
    {
        seterror1("lname","*Length of Last name cannot be zero");
        returnval= false;
    }
    var email=document.forms['myForm']["femail"].value;
    if(email.length>25)
    {
        seterror2("Email","*Email ID is too long");
        returnval= false;
    }
    var phone=document.forms['myForm']["fphone"].value;
    if(phone.length!=10)
    {
        seterror3("phone","*Your Phone number should be of 10 digits");
        returnval= false;
    }
    var pass=document.forms['myForm']["fpass"].value;
    if(pass.length<6)
    {
    seterror4("pass","*Password must be atleast 6 charecters");
    returnval=false;
    }
    var Marks=document.forms['myForm']["fpercentage"].value;
    if(Marks.length!=6)
    {
    seterror5("Percentage","*You fill your Percentage (write a 40.60% like that) ");
    returnval=false;
    }
    var Mother=document.forms['myForm']["Mname"].value;
    if(Mother.length<5)
    {
    seterror6("Mother","*You fill your Mother name");
    returnval=false;
    }
    var father=document.forms['myForm']["Fathername"].value;
    if(father.length<5)
    {
    seterror7("Father","*You fill your Father name");
    returnval=false;
    }

    return returnval;
}

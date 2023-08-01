var a = 1;
var password=document.getElementById("pi");
var firstname=document.getElementById("fni");
var lastname=document.getElementById("lni");
var contact=document.getElementById("ci");
var confirm=document.getElementById("cpi");
var button=document.getElementById("b");
var div4 = document.querySelector("div4");
function show1()
{
    if(a==1)
    {
        document.getElementById("i1").style.display="block";
        document.getElementById("i2").style.display="none";
        document.getElementById("i3").style.display="none";
    }
}
function show2()
{
    if(a==1)
    {
        document.getElementById("i1").style.display="none";
        document.getElementById("i2").style.display="block";
        document.getElementById("i3").style.display="none";
    }
}
function show3()
{
    if(a==1)
    {
        document.getElementById("i1").style.display="none";
        document.getElementById("i2").style.display="none";
        document.getElementById("i3").style.display="block";
    }
}
function valid()
{
    if(a==1 && confirm.value.match(password.value))
    {
        document.getElementById("num").style.color="green";
    }
    else
    {
        document.getElementById("num").style.color="red";
    }
}
function fun1()
{
    div4.innerHTML=firstname.value;
}
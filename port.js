let f=0;
function change(){
    var p=document.getElementById("body");
if(f==0)
{
    p.style.color="black";
    p.style.backgroundColor="whitesmoke";
    f=1;
}
else if(f==1)
{
    p.style.backgroundColor="black";
    p.style.color="whitesmoke";
    f=0;
}
}
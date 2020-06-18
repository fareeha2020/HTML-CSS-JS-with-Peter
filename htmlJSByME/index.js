//outputs
document.getElementById("outputs-div").innerHTML="using inner html to cahnge value";
document.write("using document.write");
//window.alert("using windowalert");gives a model(pops up) notification
//events and event listener
var divOne=document.getElementById('div-one');//found div
divOne.addEventListener('click',divOneOnClickEvent);//addded in event and its function as an argumnet

function divOneOnClickEvent(){
    alert('div one is clicked');
}
divOne.addEventListener('click',function()
{alert('alert another way')
});
window.addEventListener("resize",function(){
document.getElementById("win-resize-div").innerHtml="size is changed";
});
displayAge(); 

document.getElementById("my-div").innerHTML = "This is the updated content"; 

var xDivs = document.getElementsByClassName('x-div');

for(var i = 0; i < xDivs.length;i++){

    xDivs[i].innerHTML = `updated content for x Div ${i} and the age is ${age}`;
    xDivs[i].style.color = 'red';
}
printMessage();

function turnOn(){
    var myVarInFunction = 1; 
    let myLetInFunction = 1; 
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
    if(true){
       var myVarInIfBlock = 1; 
       let myLetInIfBlock = 1; 
    }

}

function turnOff(){

    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';

}
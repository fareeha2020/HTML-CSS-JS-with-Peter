//Outputs
document.getElementById("outputs-div").innerHTML = "Output using innerHTML"; 
document.write('Output using document.write() function'); 
//window.alert('Output using window alert function'); --modal notification
console.log('Output using console log');
//console.error('Output using console error');

//Events and event listeners
var divOne = document.getElementById('div-one'); 

divOne.addEventListener('click',divOneOnClickEvent); 

function divOneOnClickEvent(){
    alert('div one has been clicked'); 
}
divOne.addEventListener('click',function(){ 
    alert('another function listening to the event')
});

var resizeCount = 0; 
window.addEventListener("resize", function(){
    document.getElementById("window-resize-div").innerHTML = `The window has been resized ${++resizeCount} time(s)`;
},);


var useCapture = true; 

window.addEventListener("click", windowClicked,useCapture);
function windowClicked(event){
    alert('window click event listener has been triggered'); 
}

document.getElementById('event-bubble-level-one').addEventListener('click',eventBubbleLevelOneClicked,useCapture); 
function eventBubbleLevelOneClicked(event){
    alert('eventBubbleLevelOneClicked'); 
}

document.getElementById('event-bubble-level-two').addEventListener('click',eventBubbleLevelTwoClicked,useCapture); 
function eventBubbleLevelTwoClicked(event){
    alert('eventBubbleLevelTwoClicked'); 
}

document.getElementById('event-bubble-level-three').addEventListener('click',eventBubbleLevelThreeClicked,useCapture); 
function eventBubbleLevelThreeClicked(event){
    alert('eventBubbleLevelThreeClicked'); 
}
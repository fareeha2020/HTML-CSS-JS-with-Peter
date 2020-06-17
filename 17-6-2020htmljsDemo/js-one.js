debugger;

for(let i = 0; i < 100; i++ ){
    console.log("script one: " + i)
}

{
    let myLetVariableDeclaredInsideACodeBlock = 1; 
}
var age = 100; 
var x = "hello"; 

function printMessage(){
    alert("js one script: message"); 
}
function isUndefined(input) {
    return input == undefined; 
}

//if a variable is declared using var and is not inside a function it is global (it can be seen everywhere and lives the entire duration of the page)

//if a variable is declared using let or var inside a function it is local to the function (can only be seen inside the function and is only alive whilst the function is executing)

//if a variable is declared using let inside a code block { } e.g. if statement, loop. 

//scopes = global, local, block
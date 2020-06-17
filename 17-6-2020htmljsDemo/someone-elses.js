
//what is the benefit????

//nothing inside the iife will exist in the global (only local or block)
//safe no conflict, collision or overriding of variable or functions. 
//IIFE
(function(){

    function isUndefined(input) {
        return input === void 0;
    }

    {
        let a = 1; 
    }
    
    let x = 5; 
    let z = x + 10; 
    function printMessage(){
        alert("someelse script: message"); 
    }

    printMessage(); 

})(); 

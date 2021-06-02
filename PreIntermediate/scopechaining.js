var name="Angesh";//Global variable
console.log("Line number 2",name);

function sayName(){
    var name="Ms.A";//Scope variable
    console.log("Line number 6",name);
    
    sayName2();
    function sayName2(){
        var name="Ms.AG";
        console.log("Line number 11",name);
    }   
}
sayName();




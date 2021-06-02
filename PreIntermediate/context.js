//here we called function at very first 
//but doesn't show error bcoz,node use global context 
//all the functions are registred inside the context.
//while executing the code its just perfectly running.

// sayHello();
// function sayHello(){
//     console.log("HEllO");
// }


//this below code shows error 
//bcoz window is the context for browser not for node.
var myName="Ammu";
if(myName===window.myName)
{
    console.log("This is true")
}
console.log(this);
var user={
    firstName:"Angeshwari",
    courseCount:4,
    getCourseCount:function(){
        console.log("Line 6",this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 9",this);
        }
        sayHello();//regular function call
    },
    
};
user.getCourseCount();//object function call

//For all regular function calls, "this" points to window object.
//For all object function calls, "this" points to  object.



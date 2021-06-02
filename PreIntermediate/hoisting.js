 var a=10;//GLOBAL CONTEXT
//EXECUTION CONTEXT-->function declaration are scanned and made available
//--->variable declaration are scanned and made undefined.

tipper("55");//execution context kicks here and execute the function & go
function tipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}

//bigTipper("80");-->shows error bcoz(3 rd line)
var bigTipper=function(a){
    var bill=parseInt(a);
    console.log(bill+15);
}
bigTipper("80");


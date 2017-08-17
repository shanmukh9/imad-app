console.log('Loaded!');

var value=document.getElementById("counter");
var counter=0;
value.onclick=function(){
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML(count.toString());
    
    
};
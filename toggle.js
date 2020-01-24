// var lis = document.querySelectorAll("li");

// for(var i = 0; i < lis.length; i++){
//     lis[i].addEventListener("click", function(){
//         this.style.color = "pink";
//     });
// }

var body = document.querySelector("body");
var button = document.querySelector("button");
var isOrange = false;

button.addEventListener("click", function(){
    if(isOrange){
        body.style.background = "white";
        isOrange = false;
    }
    else{
        body.style.background = "orange";
        isOrange = true;
    }

});


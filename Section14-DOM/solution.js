/**
 * Created by arp226 on 7/25/2017.
 */
// alert("CONNECTED");
var button = document.querySelector("#btnclick");
var body = document.querySelector("body");
var isPurple = false;
button.addEventListener("click",function(){

    if(isPurple)
    {
        body.style.backgroundColor = "white";
    }
    else{
        body.style.backgroundColor = "purple";

    }
    isPurple = !isPurple;

})

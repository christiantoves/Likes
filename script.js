var count = 0
var count2= 0
var count3= 0
function  add1(){
    var countElement = document.querySelector("#nm-like");
    count++;
    countElement.innerText = count + " "+"like(s)";
}
function  add2(){
    var countElement = document.querySelector("#nk-like")
    count2++;
    countElement.innerText = count2 +" "+"like(s)";
}
function  add3(){
    var countElement = document.querySelector("#jr-like")
    count3++;
    countElement.innerText = count3 + " "+"like(s)";
}
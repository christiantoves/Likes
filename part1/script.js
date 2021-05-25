var count = 0
function  add1(){
    var countElement = document.querySelector("#like-number");
    count++;
    countElement.innerText = count + " "+"like(s)";
}
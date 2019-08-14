
var i = 0;
function add() {
 //document.getElementById("list").innerHTML = "<li>" + document.getElementById("task").value + "<\li>";
 var ts = document.createElement("li");
 var str = document.createTextNode(document.getElementById("task").value);
 ts.appendChild(str);
 document.getElementById("list").appendChild(ts);
}
var a = "<li>" + document.getElementById("task").value + "<\li>";    


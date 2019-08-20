
var i = 0;
function add() {
 //document.getElementById("list").innerHTML = "<li>" + document.getElementById("task").value + "<\li>";
 var ts = document.createElement("li");
 var str = document.createTextNode(document.getElementById("task").value);
 if (str != "") {
    ts.appendChild(str);
    document.getElementById("list").appendChild(ts);
 }
 document.getElementById("task").value = "";
 document.getElementById("name").innerHTML = "You have to make : ";
}
//var a = "<li>" + document.getElementById("task").value + "<\li>";    

//= "You have to make : "
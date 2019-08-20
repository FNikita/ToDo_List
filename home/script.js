/*var col_task = 0;
const input = document.querySelector('input');
input.onkeyup = logKey;

function add() {
    var str = document.createTextNode(document.getElementById("task").value);
    if (str.length != 0) {
        var ts = document.createElement("li");
        var del = document.createElement("button");
        del.setAttribute("onclick", "del(this)");
        del.appendChild(document.createTextNode("del"));
        ts.appendChild(str);
        ts.appendChild(del);
        document.getElementById("tasks").appendChild(ts);
        col_task += 1;
        document.getElementById("task").value = "";
    }
}

function del(element) {
    var el = element;
    el.parentNode.parentNode.removeChild(el.parentNode);
    col_task+=1;
}

//Listing keyup

function logKey(e) {
    if (e.code == "Enter") {
        add();
    }
}
*/

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});

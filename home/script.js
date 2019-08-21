/*
var editObj = {};
var col_task = 0;


$(function () {
    $(".but").click(function () { 
        if(editObj.edit == true) {
            editObj.obj.html("<li id=\"item\"> <input type=\"checkbox\"> " + $(".task").val() + "<button class=\"del\"> del </button> </li>" );
        }
        else if($(".task").val().length != 0){
            
            // ------------------------------jQuery
            $("ul").append("<li id=\"item\"> <input type=\"checkbox\"> " + $(".task").val() + "<button class=\"del\"> del </button> </li>");
            $(".task").val("");

            var el = document.createElement("li");

            //-------------------------JS
            el.setAttribute("id", "item");
            el.appendChild(document.createElement("input").setAttribute("type", "checkbox"));
            el.appendChild(document.createTextNode($(".task").val()));
            var el_del = document.createElement("button");
            el_del.className = "del";

            el_del.appendChild(document.createTextNode("del"));
            el.appendChild(el_del);

            //--------------------
            

            col_task++;
            $("ul").find("*").on(dblclick, dbevent());
        
            //dbevent();
        }
        
    });
});


$(function () { 
    $('html').keydown(function(e) {
        if (e.keyCode == 13) { 
            if($(".task").val().length != 0){
                $("ul").append("<li id=\"item\"> <input type=\"checkbox\"> " + $(".task").val() + "<button class=\"del\"> del </button> </li>");
                $(".task").val("");
                col_task++;
                //dbevent();
            }
        }
      });
});


$(function (this) { 
    
 });

*/

$(function () { 
    var obdEdit = {};
    var counter = 0;
    var taskList = $("ul");
    var inputTask = $(".task");

    $(".but").on(onclick, addTheTask());

    var addTheTask = function () { 
        let element = document.createElement("li");
        element.appendChild(document.createElement("input").setAttribute("type", "checkbox"));
        element.appendChild(document.createTextNode(inputTask.val()));

        let delButton = document.createElement("button");
        delButton.appendChild(document.createTextNode("del"));
        delButton.className = "del";
        delButton.onclick = "deletTask(this)";
        element.appendChild(delButton);
        element.ondblclick = "edit(this)";
        taskList.append(element);
    }

    var deletTask = function (this) { 
        $(this).parent.removeChild(this);
    }


    var edit = function () { 
        obdEdit.edit = true;
        obdEdit.obj = this;
    }



 })








/*
$(function chekEl() {
    $("#all_check").change(function () { 
        if($("#all_check").text() == "on"){
            $("p").hide();
        }
        else
        {
            $("p").show();
        } 
})

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



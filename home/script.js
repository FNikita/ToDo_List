function addElement(textTask) {
        if ( textTask.length != 0 ){
            $("ul").append("<li id=\"item\">" + "<input type=\"checkbox\" >" + textTask  + "<button id=\"del\"  > del </button></li>");
            $("input#task").val("");
        }
}

function delet(a) {
    alert("del");
}


$(function () {
    var count = 0;
    var objEdit = {};
    var redy = false;

    $("button#but").click(function (e) { 
        addElement($("input#task").val());
    });

    $(document).keydown(function (e) { 
        if(e.code == "Enter") {
         addElement($("input#task").val());
        }
    });
    

   
});

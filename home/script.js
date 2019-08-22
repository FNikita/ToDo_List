
function addElement(textTask) {
        if ( textTask.length != 0 ){
            $("ul").append(`<li class="item"><input type="checkbox" class="check"> ${textTask} <button class="del" > del </button></li>`);
            $("input#task").val("");
            editCol();
        }
}

//edit col
function editCol() {
    $("p#all_task").text(`All task ${$("input.check").length} Done ${$("input.check:checked").length}`);
}

$(function () {
    var objEdit = {};

    $("button#but").click(function (e) { 
        addElement($("input#task").val());
    });

    $(document).keydown(function (e) { 
        if(e.code == "Enter") {
         addElement($("input#task").val());
        }

    });

    $(document).on("click", ".del", function () {
        $(this).parent().remove();
    });
    
    $("input#chek_all").change(function (e) { 
        if($("input#chek_all").is(':checked')) {
            $("input.check").prop('checked', true);
        }
        else
        {
            $("input.check").prop('checked', false);
        }
        editCol();
    });

    $("button#del_all").click(function (e) {
        $("input.check:checked").parent().remove();
        editCol();
    });


    $("ul").on("change", "input.check" , function () {
        editCol();
    });
    
    // add dbclick
    $( "ul" ).on( "dblclick", ".item", function(obj) {
        alert(obj.html);
    } );








   
});

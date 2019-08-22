var globalVariabls = {
    listTask:$("ul"),
    inputArea:$("input#task"),
    htmlLi:'',
    objEdit:{
        edit:false,
        jqObg:{}
    }
}

function addElement(textTask) {
    if (textTask.length != 0)
    {
        if (globalVariabls.objEdit.edit == true) {
            $(globalVariabls.objEdit.jqObg).html(`<input type="checkbox" class="check"> ${textTask} <button class="del" > del </button>`);
            globalVariabls.objEdit.edit = false;
        }
        else {
            globalVariabls.listTask.append(`<li class="item"><input type="checkbox" class="check"> ${textTask} <button class="del" > del </button></li>`);
            globalVariabls.inputArea.val("");
            editCol();
        }
        
    }
}


function editCol() {
    $("p#all_task").html(`<p> All task ${$("input.check").length} Done ${$("input.check:checked").length} </p>`);
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
        editCol();
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
        $("input.check:checked")
            .parent()
            .remove();
        editCol();
    });

    $("ul").on("change", "input.check" , function () {
        editCol();
    });
    
    // add dbclick
    $( "ul" ).on( "dblclick", ".item", function(obj) {
        globalVariabls.inputArea.val($(this).text().replace("del", ""));
        globalVariabls.objEdit.edit = true;
        globalVariabls.objEdit.jqObg = this;
    } );
   
    $("select").on("change", "option", function(e) {
        if(e.val() == "All")
        {
            alert("All");
        }
    })
});

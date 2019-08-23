var globalVariabls = {
    listTask:$("ul"),
    inputArea:$("input#task"),
    htmlLi:'',
    objEdit:{
        edit:false,
        jqObg:{}
    },
    colButton: 1,
    pageActiv:0,
    activeLi:0,
    listLangth: 0,
    flag: true
}

function pagination() {
    globalVariabls.listLangth = $("li.item").length;
    if (globalVariabls.listLangth >= 10*globalVariabls.colButton) {
        globalVariabls.colButton += 1;
        if (globalVariabls.flag) {
            $("#pag").append(`<button class="paginationBut" id="but${globalVariabls.colButton-1}"> ${globalVariabls.colButton -1 } </button>`);
            $("#pag").append(`<button class="paginationBut" id="but${globalVariabls.colButton}"> ${globalVariabls.colButton} </button>`);
            globalVariabls.flag = false;
        }else
        {
            $("#pag").append(`<button class="paginationBut" id="but${globalVariabls.colButton}"> ${globalVariabls.colButton} </button>`);
        }
        globalVariabls.pageActiv = globalVariabls.colButton;
        $("li.item").hide();
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
        pagination();
    }
}

function editCol() {
    pagination();
    $("p#all_task").html(`<p> All task ${$("input.check").length} Done ${$("input.check:checked").length} </p>`);
    if ($("input.check").length != 0) {
        $("h1").text("You have to MAKE IT");
        
    }
    else {
        $("h1").text("Nothink To do:");

    }

}


function throw_el(e) { 
    console.log(this);
    if ($(e).is(':checked')) {
        $(e).parent().addClass("deleted");
    }
    else {
        $(e).parent().removeClass("deleted");
    }
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
        pagination();
    });
    
    $("input#chek_all").change(function (e) { 
        if($("input#chek_all").is(':checked')) {
            $("input.check").prop('checked', true);
        }
        else
        {
            $("input.check").prop('checked', false);
        }
        if ($("input.check").is(':checked')) {
            $("input.check").parent().addClass("deleted");
        }
        else {
            $("input.check").parent().removeClass("deleted");
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
        throw_el(this);
        editCol();
    });
    

    $( "ul" ).on( "dblclick", ".item", function(obj) {
        globalVariabls.inputArea.val($(this).text().replace("del", ""));
        globalVariabls.objEdit.edit = true;
        globalVariabls.objEdit.jqObg = this;
    } );
   
    $("select").change(function (e) { 
        let selVal = $('select option:selected').val();
        $("input.check").parent().show();
        if(selVal == "Active") {
            $("input.check:checked").parent().hide();
        } else if (selVal == "Completed") {
            $("input.check:not(:checked)").parent().hide();
        }
    });

    $("div#pag").on("click", "button.paginationBut", function () {
        globalVariabls.pageActiv = Number($(this).attr("id").replace("but", ""));
        $(`.item`).show();
        globalVariabls.activeLi = globalVariabls.listLangth % 10;
        //alert(globalVariabls.activeLi);
        $(`.item:lt(${(globalVariabls.pageActiv-1)*10})`).hide();
        $(`.item:gt(${(globalVariabls.pageActiv-1)*10+10})`).hide();
    });

});

function addElement(textTask, redy) {
        if ( textTask.length != 0 ){
            $("ul").append(`<li id="item"><input type="checkbox" class="check"> ${textTask} <button class="del> del </button></li>`);
            $("input#task").val("");
        }
}


$(function () {
    var count = 0;
    var objEdit = {};

    $("button#but").click(function (e) { 
        addElement($("input#task").val(), redy);
    });

    $(document).keydown(function (e) { 
        if(e.code == "Enter") {
         addElement($("input#task").val(), redy);
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
    });

    $("button#del_all").click(function (e) {
        $("input.check:checked").parent().remove();
    });
   
});

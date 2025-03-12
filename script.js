$(document).ready(function() {
    $("#todo-form").submit(function(event) {
        event.preventDefault();
        
        let todoText = $("#todo-input").val().trim();
        if (todoText !== "") {
            $("#todo-list").append(`<li>${todoText} <span class="delete">❌</span></li>`);
            $("#todo-input").val("");
        }
    });

    $(document).on("click", ".delete", function() {
        $(this).parent().remove();
    });
});

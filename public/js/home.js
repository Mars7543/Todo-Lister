$(document).ready(() => {
    $('#add-item').click(function() {
        $('.collection').append('<li class="collection-item"><input class="braindump" type="text" placeholder="Type here..."></li>')
    })

    $(document).on('focus', '.braindump', function() {
        $(this).parent().addClass('selected')
    })

    $(document).on('keydown', '.braindump', function(e) {
        if (e.keyCode === 9 || e.keyCode === 13) {
            if ($(this).val() !== "") {
                e.preventDefault()
                $("#add-item").click()
                $(".braindump:last").focus()
            }
        } else if (e.keyCode === 8 || e.keyCode === 46) {
            if (!($('.collection').children().length == 1 || $(this).val() !== "")) {
                e.preventDefault()
                $(this).parent().remove()
                $(".braindump:last").focus()
            }
        }
    })

    $(document).on('focusout', '.braindump', function() {
        $(this).parent().removeClass('selected')
    })
})
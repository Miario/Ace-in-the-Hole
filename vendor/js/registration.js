$(function () {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {

        },
        submitSuccess: function ($form, event) {
            event.preventDefault();

            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
            var age = $("input#age").val();
            var event = new Array();
            $("input:checked").each(function () {
                event.push($(this).val());
            });
            var tshirt = $('input:radio[name=tshirt]:checked').val();
            var liability = $('input:checkbox[name=liability]:checked').val();
            var comments = $("textarea#comments").val();
            var firstName = name;

            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "./mail/registration.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    age: age,
                    event: event,
                    tshirt: tshirt,
                    liability: liability,
                    comments: comments
                },
                cache: false,
                success: function () {

                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');


                    $('#contactForm').trigger("reset");
                },
                error: function () {

                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from d.com;>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');

                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


$('#name').focus(function () {
    $('#success').html('');
});

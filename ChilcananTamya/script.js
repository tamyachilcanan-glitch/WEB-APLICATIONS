$(document).ready(function() {

    $("#changeColor").click(function() {

        let colors = ["#abcde2", "#d6eaf8", "#d5f5e3", "#fcf3cf", "#f5eef8"];

        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        $("body").css("background-color", randomColor);
    });


    $(".gallery img").click(function() {

        let imageSource = $(this).attr("src");

        $("#modalImage").attr("src", imageSource);

        $("#imageModal").show();
    });


    $(".close").click(function() {
        $("#imageModal").hide();
    });

    $("#contactForm").submit(function(event) {

    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name == "" || email == "" || message == "") {
        alert("Please complete all fields.");
    } else {
        alert("Form submitted successfully!");
    }

});

});
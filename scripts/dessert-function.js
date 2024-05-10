$(document).ready(function () {
    $("#serve-btn").click(function () {
        $("#description-box").fadeOut(1000);
        $("#food-image-duplicate").css({top: "-100%", opacity: "0"}).animate({top: "30%", opacity: "1"}, 2000, function() {
            setTimeout(function() {
                $("#food-image-duplicate").fadeOut(500, function() { // Adjusted fade-out time to 500 milliseconds
                    // Add a slight delay before showing text and changing background color
                    setTimeout(function() {
                        // Show text and button after image fades out
                        showText(0);
                        // Change background color to black by changing body class
                        $('body').removeClass('bg-restaurant').addClass('bg-black');
                    }, 3000); // Adjust the delay time as needed
                });
            }, 1000); // Adjust the delay time as needed
        });
    });

    var texts = [
        "Okay Freakcheska",
        "I guess you liked the tiramisu",
        "It was barely on the screen",
        "That's all I \"cooked\" for your meal",
        "I'm sorry if I wasn't able to satisfy your apparent insatiable hunger",
        "I hope you enjoyed this little thing I made though,",
        "The amount of time and effort to make this website was crazy",
        "But at least you have something to return to when you want seafood again",
        "If you're broke that is",
        "Okay thanks for your time, Cheska",
        "Bye bye"
    ];

    function showText(index) {
        if (index < texts.length) {
            $('#fadeInText').text(texts[index]).fadeIn(1000).delay(2000).fadeOut(1000, function() {
                showText(index + 1);
            });
        } else {
            $('#redirectButton').fadeIn(1000);
        }
    }

    $('#redirectButton').on('click', function() {
        window.location.href = 'index.html';
    });
});

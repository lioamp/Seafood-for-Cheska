$(document).ready(function () {
    $("#serve-btn").click(function () {
        $("#description-box").fadeOut(1000);
        $("#food-image-duplicate").css({top: "-100%", opacity: "0"}).animate({top: "30%", opacity: "1"}, 2000, function() {
            setTimeout(function() {
                $("#food-image-duplicate").fadeOut(1000, function() {
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
        "Alright Cheska",
        "I know you like uni",
        "But you didn't have to inhale it like that",
        "Luckily the main course is ready",
        "You won't be devouring this one that fast",
        "I think..."
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
        window.location.href = 'main-course.html';
    });
});

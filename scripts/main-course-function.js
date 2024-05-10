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
        "DAMN!",
        "Slow down Fran Kocean",
        "Was is that good?",
        "Or do you have another dimension in that mouth?",
        "Anyway, it doesn't matter",
        "Dessert is up next",
        "You never answered what you wanted 🙄",
        "So you're just gonna have to eat what I give",
        "Whether you like it or not",
        "And unfortunately for you",
        "It isn't me, I'm sorry."
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
        window.location.href = 'dessert.html';
    });
});

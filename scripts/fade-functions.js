$(document).ready(function(){
            console.log("jQuery loaded successfully");
            var texts = [
                "Seafood for Cheska prepared by Chef Carlos",
                "Hi Cheska!",
                "Carlos here",
                "Batman as you may know",
                "I wanted to make something for you",
                "More action and less talk",
                "Something with effort",
                "You said you liked seafood",
                "But it's real expensive over there in Germany =(",
                "So I made you a meal!",
                "But as I am a better programmer than I am a cook...",
                "I made a website lol",
                "Hope you enjoy!"
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

            showText(0);

            $('#redirectButton').on('click', function() {
                window.location.href = 'entrée.html';
            });
        });
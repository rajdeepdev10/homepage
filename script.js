let body_div = document.querySelector("body");
            let theme_btn = document.querySelector("#change-theme");
            let house_img = document.querySelector("#day");

            theme_btn.onclick = function() {
                if(theme_btn.innerHTML === "Dark Theme")
                {
                    body_div.style.backgroundColor = "black";
                    body_div.style.color = "white";
                    theme_btn.innerHTML = "Light Theme";
                }
                else
                {
                    body_div.style.backgroundColor = "white";
                    body_div.style.color = "black";
                    theme_btn.innerHTML = "Dark Theme"
                }

            }
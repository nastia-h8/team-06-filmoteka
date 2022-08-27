const backToTopButton = document.querySelector(".arrow-btn");

            const goToTop = (e) => {
                document.body.scrollIntoView({
                    behavior: "smooth"
                });

            };

            backToTopButton.addEventListener("click", goToTop);

backToTopButton.classList.add('none');


window.addEventListener('scroll', () => {

            if(window.scrollY < 100){
                backToTopButton.classList.add('none');
                backToTopButton.classList.remove('block');
                return;
            } else if (window.scrollY >= 100) {
            backToTopButton.classList.add('block');
            backToTopButton.classList.remove('none');
                return;
            }
        console.log(Math.floor(window.scrollY));
        });
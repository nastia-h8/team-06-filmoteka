const backToTopButton = document.querySelector(".arrow-btn");

            export function goToTop(e) {
                document.body.scrollIntoView({
                    behavior: "smooth"
                });

            };

            backToTopButton.addEventListener("click", goToTop);

// backToTopButton.classList.add('none');
delBtn();


window.addEventListener('scroll', () => {

            if(window.scrollY < 100){
                delBtn()
                return;
            } else if (window.scrollY >= 100) {
            backToTopButton.classList.add('block');
            backToTopButton.classList.remove('none');
                return;
            }
        // console.log(Math.floor(window.scrollY));
});
export function delBtn() {
    backToTopButton.classList.add('none');
    backToTopButton.classList.remove('block');
}
        
window.onload = function () {
            document.body.classList.add('loaded_hiding');
            window.setTimeout(function () {
                document.body.classList.add('loaded');
                document.body.classList.remove('loaded_hiding');
            }, 500);
}
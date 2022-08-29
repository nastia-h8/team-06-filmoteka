import { Loading } from 'notiflix/build/notiflix-loading-aio';


const backToTopButton = document.querySelector(".arrow-btn");

            export function goToTop(e) {
                document.body.scrollIntoView({
                    behavior: "smooth"
                });

            };

            backToTopButton.addEventListener("click", goToTop);

delBtn();


window.addEventListener('scroll', () => {

            if(window.scrollY < 100){
                delBtn();
                return;
            } else if (window.scrollY >= 100) {
                addBtn();
                return;
            }

});
window.addEventListener('scroll', closeOpenbtn)

        export function closeOpenbtn() {
            if(window.scrollY < 100){
                delBtn();
                return;
            } else if (window.scrollY >= 100) {
                addBtn();
                return;
                };
        };


export function delBtn() {
    backToTopButton.classList.add('none');
    backToTopButton.classList.remove('block');
};
export function addBtn() {
    backToTopButton.classList.add('block');
    backToTopButton.classList.remove('none');
};

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

export function preLoader() {

    Loading.custom({
    customSvgCode: `<div class="preloader-dev">
        <div class="preloader-dev__row">
            <div class="preloader-dev__item"></div>
            <div class="preloader-dev__item"></div>
        </div>
    </div>`,
})
}


export function preLoaderDel() { 
    Loading.remove();
}
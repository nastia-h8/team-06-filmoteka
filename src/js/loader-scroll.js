import { Loading } from 'notiflix/build/notiflix-loading-aio';
const btnItem = document.querySelector('.loader')
function fetchImage()  {
    return `
    <div"> eijdflkdnfjasl/vkndsvbjafwkvndja</div>
        <div class="preloader">
        <div class="preloader__row">
            <div class="preloader__item"></div>
            <div class="preloader__item"></div>
        </div>
    </div>
    `
}

// function conct(array) {
//     const cardExample = array.map(() => fetchImage()).join('');
  
// btnItem.insertAdjacentHTML('beforeend', cardExample);
// };
//   console.log(conct())
// console.log(conct())
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
                delBtn();
                return;
            } else if (window.scrollY >= 100) {
                addBtn();
                return;
            }
        // console.log(Math.floor(window.scrollY));
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
        // console.log(Math.floor(window.scrollY));

export function delBtn() {
    backToTopButton.classList.add('none');
    backToTopButton.classList.remove('block');
};
export function addBtn() {
    backToTopButton.classList.add('block');
    backToTopButton.classList.remove('none');
};
        
export function preloaderEd() {
    window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};
}
// preloaderEd()
// export function preLoader() {
// //     Loading.custom({
// //         svgSize: '100px',
// //           customSvgCode: `<div class="preloader">
// //         <div class="preloader__row">
// //             <div class="preloader__item"></div>
// //             <div class="preloader__item"></div>
// //         </div>
// //     </div>`
// //   });
//     Loading.dots({
//         svgSize: '100px',
//     });
// }
Loading.custom('Loading...', {
customSvgCode: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="241px" height="241px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"></svg>',
});
// preLoader()
// export function preLoaderDel() { 
//     Loading.remove();
// }

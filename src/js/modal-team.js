
import { closeOpenbtn } from './loader-scroll'
import { delBtn } from './loader-scroll'

const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdropTeam = document.querySelector('.team-backdrop');
const body = document.querySelector('body')
// const arrowBtn = document.querySelector('.arrow-btn')

openModalBtn.addEventListener('click', openModalOpen);
closeModalBtn.addEventListener('click', closeModalClose);
backdropTeam.addEventListener('click', clickBackdropClick);

// function delArrowBtn() {
//     arrowBtn.classList.add('none');
//     arrowBtn.classList.remove('block');
// };
// function addArrowBtn() {
//     arrowBtn.classList.add('block');
//     arrowBtn.classList.remove('none');
// };

function openModalOpen() {
    window.addEventListener('keydown', onEscPress)
    document.body.classList.add('show-modal')

    modalScrollStop()
    // document.arrowBtn.classList.add('none')
}

function closeModalClose() {

    // addArrowBtn();
// modalScrollReturn()
    // closeOpenbtn();

    window.removeEventListener('keydown', onEscPress)
    closeOpenbtn();
    document.body.classList.remove('show-modal')
document.body.style.overflow = 'auto'
}

function clickBackdropClick(e) {
    if (e.currentTarget === e.target) {
        closeModalClose();
    }
}

function onEscPress(e) {
    const ifTapEcsKey = e.code === 'Escape';

    if (ifTapEcsKey) {
        closeModalClose()
    }
}

function modalScrollStop() {
    if (body.classList.contains('show-modal')) {
        delBtn();
        document.body.style.overflow = 'hidden'
        backdropTeam.style.overflow = 'auto'
    }
}

// function modalScrollReturn() {
//     if (!body.classList.contains('show-modal')) {
//         document.body.style.overflow = 'auto'
//     }
// }

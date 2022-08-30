import { closeOpenbtn } from './loader-scroll'
import { delBtn } from './loader-scroll'

const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdropTeam = document.querySelector('.team-backdrop');

openModalBtn.addEventListener('click', openModalOpen);
closeModalBtn.addEventListener('click', closeModalClose);
backdropTeam.addEventListener('click', clickBackdropClick);

function openModalOpen() {
    delBtn();
    window.addEventListener('keydown', onEscPress)
    document.body.classList.add('show-modal')
}

function closeModalClose() {
    closeOpenbtn();
    window.removeEventListener('keydown', onEscPress)
    document.body.classList.remove('show-modal')
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



const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdropTeam = document.querySelector('.team-backdrop');
const arrowBtn = document.querySelector('.arrow-btn')

openModalBtn.addEventListener('click', openModalOpen);
closeModalBtn.addEventListener('click', closeModalClose);
backdropTeam.addEventListener('click', clickBackdropClick);

function delArrowBtn() {
    arrowBtn.classList.add('none');
    arrowBtn.classList.remove('block');
};
function addArrowBtn() {
    arrowBtn.classList.add('block');
    arrowBtn.classList.remove('none');
};

function openModalOpen() {
    window.addEventListener('keydown', onEscPress)
    document.body.classList.add('show-modal')

    // modalScrollStop()
    // document.arrowBtn.classList.add('none')
}

function closeModalClose() {
    // addArrowBtn();
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

function modalScrollStop() {
    if (!body.classList.contains('open-modal')) {
        // delArrowBtn();
    document.body.style.overflow = 'hidden'
    }
}

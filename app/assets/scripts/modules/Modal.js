import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.modalClose = $('.modal__close');
        this.events();
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }

    events() {
        //Clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
        //Clicking the X close modal button
        this.modalClose.click(this.closeModal.bind(this));
        //User pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));

    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }
}

export default Modal; 
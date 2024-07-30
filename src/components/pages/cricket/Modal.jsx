import PropTypes from 'prop-types';

function Modal({ onClose, children}) {
    return (
        <>
            <div className="fixed  inset-0 bg-black/60 z-10 " onClick={onClose} ></div>
            <dialog open autoFocus aria-modal="true" className="modal-content">
                {children}
            </dialog>

        </>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    
};

export default Modal;

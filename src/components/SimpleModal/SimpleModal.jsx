import "./SimpleModal.scss";
import X from "@/assets/img/icons/x.svg?react";

const SimpleModal = ({isOpen, onClose, children}) => {
    return (

<>
    {isOpen && (
        <div className="modal">
                <div className="modal-wrapper">
                    <div className="modal-content">
                    <button onClick={()=> onClose()} className="modal-close-button">
                    <X className="x"/>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )}
</>
     );
}

export {SimpleModal};
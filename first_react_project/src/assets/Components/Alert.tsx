import React from 'react';

interface Props {
    text: string;
    onClose: () => void;

}

const Alert = ({text,onClose}: Props) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show"
             role="alert">
            {text}
            <button type="button" onClick={onClose} className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close">{}</button>

        </div>

    );
};

export default Alert;

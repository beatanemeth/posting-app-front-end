import React, { Fragment } from "react";
import Card from "./Card";


function ErrorModal({ children, onClose }) {
    return (
        <Fragment>
            <div className="backdrop" onClick={onClose} />
            <dialog open className="modal">
                <Card>
                    <h2>An Error Occurred!</h2>
                    <h1>{children.errorTitle}</h1>
                    <p>{children.errorMessage}</p>
                    <button
                        type="button"
                        onClick={onClose}
                    >
                        Okay
                    </button>
                </Card>
            </dialog>
        </Fragment>
    );
}

export default ErrorModal;
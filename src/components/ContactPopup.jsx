import { useEffect, useState } from "react";
import "./ContactPopup.css";

const ContactPopup = (props) => {
    const [show, setShow] = useState(false);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <div
            style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0"
            }}
            className="popup_overlay"
        >
            <div className="popup_container">
                <h2 className="popup_h2">Error</h2>
                <span
                    className="popup_close"
                    onClick={closeHandler}
                >
                    <h3  className="popup_h3"> &times; </h3>
                </span>
                <div className="popup_content">{props.children}</div>
            </div>
        </div>
    );
};



export default ContactPopup;

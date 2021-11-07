import React, { useState } from "react";
import "./Contact.css"
import "./ContactPopup.css"
import ContactPopup from "./ContactPopup";
import  "./ContactPopup.css";






const Contact = () => {

        const [visibility, setVisibility] = useState(false);

        const popupCloseHandler = () => {
            setVisibility(false);
        };

        const onClickPopupOpen =() =>{
            formValidation()
            setVisibility(true)
        }


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    let errors = [];
    function ValidateEmail(email) {
        return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) ;
    }

    const formValidation = () => {
        setErrorMessages([]);

        const isNameValid = name !== "";
        const isSurNameValid = surName !== "";
        const isMessageValid = message !== "";



        if (!isNameValid) {
            errors.push("Name is not valid, please try again.");
        }

        if (!isSurNameValid) {
            errors.push("Surname is not valid, please try again.");
        }

        if (!ValidateEmail(email)) {
            errors.push("Email is not valid, please try again.");
        }
        if (email === "") {
            errors.push("Email field is empty, please try again.");
        }
        if (!isMessageValid) {
            errors.push("Message is not valid, please try again.");
        }

        if (errors.length > 0) {
            setShowErrors({ showErrors: true });
            setErrorMessages(errors);
        } else {
            setShowErrors({ showErrors: false });
            alert("Email Sent");
        }
    };

    return (
        <div className="contact_section">
            <div className="contact_container">


                <div className="contact_message_box">
                    <ContactPopup
                        onClose={popupCloseHandler}
                        show={visibility}
                    >
                        { showErrors
                            ? errorMessages.map((item, id, ) => {
                                return (
                                    <div className="contact_error_contain">
                                        <h2 key={id} className="contact_error_h2">{item}</h2>
                                    </div>
                                )
                            })
                            : null
                        }

                    </ContactPopup>
                </div>

                <div className="contact_inner">
                    <h2 className="contact_h2"> GET IN TOUCH </h2>
                    <form className="contact_form">

                        <div className="contact_name_subName_email">
                            <label htmlFor="Name" className="contact_name" >
                                <input
                                    id={1}
                                    className="contact_input_name"
                                    placeholder="Name(Required)"
                                    type="text"
                                    onChange={e => setName(e.target.value)}
                                />
                            </label>

                            <label htmlFor="SurName" className="contact_surname">
                                <input
                                    id={2}
                                    className="contact_input_surname"
                                    placeholder="Surname(Required)"
                                    type="text"
                                    onChange={e => setSurName(e.target.value)}
                                />
                            </label>


                            <label htmlFor="Email" className="contact_email">
                                <input
                                    id={3}
                                    className="contact_input_email"
                                    placeholder="Email(Required)"
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="contact_message_container">

                            <label htmlFor="Message" className="contact_message">
                                <input
                                    id={4}
                                    className="contact_input_message"
                                    placeholder="Your opinion is important to us..."
                                    type="text"
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </label>

                        </div>

                        <label htmlFor="button" className="contact_button">
                            <button
                                className="contact_button_button"
                                color="primary"
                                type="button"

                                onClick={onClickPopupOpen}
                            >
                                <h2 className="contact_button_h2"> SEND MESSAGE </h2>
                            </button>
                        </label>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;

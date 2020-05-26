import React from 'react';

export default function Contact(props) {
    return (
        <div id="contact-wrapper" className={props.className}>
            <Form hide={props.className}/>
        </div>
    )
}

const Form = (props) => {
    return (
        <div id="contact-form-div">
        <form id='toggle-contact-form' className="">
        <label htmlFor="email-contact-name" className="f-l-i">Contact Name</label>
        <input type="text" id="email-contact-name"  className="f-l-i" placeholder="Name" required></input>
        <label htmlFor="email-contact" className="f-l-i">Contact Email</label>
        <input type="email" id='email-contact' className="f-l-i" placeholder="contact email" required></input>
    <label htmlFor="contact-email-category" className="f-l-i">Select Category</label>
    <select id="contact-email-category" className="f-l-i">
        <optgroup>
            <option defaultValue="email-contact-cat-general">General</option>
            <option value="email-contact-cat-website">Website</option>
            <option value="email-contact-cat-order">Order</option>
            <option value="email-contact-cat-other">Other</option>
        </optgroup>
    </select>
    <textarea id="email-message" minLength="50" maxLength="1800" cols="" rows="20" placeholder="Please type your message here before sending." required></textarea>
    <button type="submit" defaultValue="Send">Send Message</button>
    <button type="reset">Reset</button>
    <button id="cancel-form-button" className="click-hide-contact-us">Cancel</button>
    </form>
        </div>
    )
}

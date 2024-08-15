import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form>
            <div className="name-container">
                <input type="text" name="firstname" placeholder="First Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
                <input type="text" name="Email" placeholder="Email" />
                   </div>
                <textarea type="text" name="message" placeholder="Message" rows={3} />
                <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm
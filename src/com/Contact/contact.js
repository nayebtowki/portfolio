import './contact.css';
import linkedin from '../../assets/linkedin.png';
import twitterIcon from '../../assets/twitter.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dx6hg3f', 'template_sp9d8s3', form.current, 'mUl0WpNNjjQDOda0M')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/nayebtowki/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://twitter.com/towki98" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
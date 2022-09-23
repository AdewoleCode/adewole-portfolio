import React from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FiTwitter } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wrvpji3', 'template_yverfmx', form.current, 'yZYjvSaCnhyflKnLl')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  };

 


  return (
    <section id='contact'>
      <h5>Contact</h5>
      <h2>Talk to me...</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-item'>
            <HiOutlineMail className='contact-icon' />
            <h4>Email</h4>
            <h5>adeadewole1712@gmail.com</h5>
            <a href="mailto:adeadewole1712@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact-item' >
            <FiTwitter className='contact-icon' />
            <h4>Twitter</h4>
            <h5>@robinhood_1712</h5>
            <a href="https://twitter.com/messages" target="_blank">Send a message</a>
          </article>
          <article className='contact-item'>
            <ImWhatsapp className='contact-icon' />
            <h4>Whatsapp</h4>
            <h5>+234-90-2417-3596</h5>
            <a href="https://api.whatsapp.com/send?phone=09024173596" target="_blank">Send a message</a>
          </article>


        </div>

        {/* form */}
        <form ref={form} className='contact-form' onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>


        </form>
      </div>
    </section>
  )
}

export default Contact
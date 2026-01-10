import React from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_37ip6ci', 
      'template_1wgd79p', 
      e.target,
      'x8acjXqGpZ0dB4gC3'    
    ).then(
      () => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message!');
        console.log(error.text);
      }
    );
  };

  return (
    <section data-aos='fade-up' className='contact-section' id='contacts'>
      <div className="container">
        <div className="contact-card">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h2 className='contact-title'>Get In Touch</h2>
              <h3 className='contact-subtitle'>Let's Collaborate!</h3>
              <p className='contact-description'>Feel free to reach out for collaborations, projects, or any inquiries - I'd love to connect.</p>
              <form className='contact-form' onSubmit={sendEmail}>
                <div className="mb-4">
                  <input type="text" name='first_name' className="form-control" id="f-name" placeholder='First Name' required />
                </div>
                <div className="mb-4">
                  <input type="text" name='last_name' className="form-control" id="l-name" placeholder='Last Name' required />
                </div>
                <div className="mb-4">
                  <input type="email" name='user_email' className="form-control" id="email" placeholder='Email' required />
                </div>
                <div className="mb-4">
                  <textarea name='message' className="form-control" rows='5' placeholder="Type your message here..." required></textarea>
                </div>
                <button type="submit" className="btn btn-send w-100">Send message</button>
              </form>
            </div>
            <div className="col">
              <div className="contact-img"></div>
              <div className="contact-info-box">
                <div className="contact-icon"><i className="ri-mail-ai-fill"></i>
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">majeedwajeeha228@gmail.com</div>
                </div>
              </div>
              <div className="contact-info-box">
                <div className="contact-icon"><i className="ri-phone-fill"></i></div>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">(+92)3010229061</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

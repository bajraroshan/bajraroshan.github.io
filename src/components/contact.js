import React from "react";
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';


const SERVICE_ID = "service_i2e2wrh";
const TEMPLATE_ID = "template_gb5p1sf";
const USER_ID = "user_gWNlkBFnwa007tYjT7CEk";

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfull'
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      });
    e.target.reset();
  };

  return (
    <section id="contact" className="contact spacer">
      <div className="container">
        <div className="row">
          <div className="column-full center">
            <h3>Keep in touch</h3>
            <h2>Contact</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="column-half">
            <div className="contact-content">
              <h4>Contact Details</h4>
              <ul>
                <li>
                  <i className="fas fa-fw fa-map-marker-alt"></i>
                  Adelaide, 5000, SA, Australia
                </li>
                <li>
                  <i className="fas fa-fw fa-phone-alt"></i>
                  <a href="tel: +61 123 456 7890"> +61 123 456 7890</a>
                </li>
                <li>
                  <i className="fab fa-fw fa-linkedin"></i>
                  <a href="https://www.linkedin.com/in/roshan-bajracharya-025b7b42/" target="_blank" rel="noreferrer" >
                    /roshan-bajracharya
                  </a>
                </li>
                <li>
                  <i className="fab fa-fw fa-github"></i>
                  <a href="https://github.com/bajraroshan" target="_blank" rel="noreferrer">
                    /bajraroshan
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column-half">
            <div className="form_container">
              <form  onSubmit={handleOnSubmit}>
                <div className="form-row">
                  <div className="form-label">
                  <Form.Field
                      id='form-input-control-last-name'
                      control={Input}
                      label='Name'
                      name='user_name'
                      placeholder='Enter your Full Name'
                      required
                      icon='user circle'
                      iconPosition='left'
                    />
                  </div>
                  <div className="form-label">
                  <Form.Field
                    id= 'form-input-control-email'
                    control= {Input}
                    label= 'Email'
                    name= 'user_email'
                    placeholder= 'Enter your email address'
                    required
                    icon= 'mail'
                    iconPosition= 'left'
                  />
                  </div>
                  <div className="form-label">
                  <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Enter your Message'
                    required
                  />
                  </div>
                  <div className="form-label">
                  <Button type='submit' className='submit'>Submit</Button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

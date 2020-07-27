import React from "react";
import axios from "axios"; // For making client request.

import './ContactMeForm.css';
import { Col,Container,Row } from 'react-bootstrap';


class ContactMeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", email: "", message: ""};
  }

  // handleForm = e => {
  //   axios.post(
  //     "https://formcarry.com/s/Ub7dNBJ1qnrF", 
  //     this.state, 
  //     {headers: {"Accept": "application/json"}}
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   e.preventDefault();
  // }
  

  // handleFields = e => this.setState({ [e.target.name]: e.target.value });

  
  // constructor(props) {
  //   super(props);
  //   this.state = { Name: "", email: "", subject:"", message: "" };
  // }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/Ub7dNBJ1qnrF",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(function (response) {
        let successMessage = document.querySelector('.success-message');
        successMessage.innerHTML = JSON.stringify(response.data.title);
      })
      .catch(function (error) {
        let successMessage = document.querySelector('.success-message');
        successMessage.innerHTML = JSON.stringify(error);
      });

    e.preventDefault();
    // this.setState({ Name: "", email: "", subject:"", message: "" }) // <= here
  }
  handleFields = e => this.setState({ [e.target.name]: e.target.value }); 

  

  render() {
    return (
      <>
      <Row lg={12}>
   <Col xl={5}>
      <div className="contact-info email">
         <span>Or just say</span>
         <a href="mailto:fadhilasharaf@gmail.com">fadhilasharaf@gmail.com</a>
      </div>
      <div className="contact-info address">
         <span>Ping me</span>
         <p>+91 808 661 93 93<br /> 
            Calicut, Kerala, India</p>
      </div>
      <div className="contact-info">
         <span>Follow Me</span>
            <a href="https://github.com/fadhil-sweans" target="_blank" rel="noopener noreferrer">
                Github
            </a>
            <a href="https://www.linkedin.com/in/fadhil-asharaf/" target="_blank" rel="noopener noreferrer">
            LinkedIn
            </a>
            <a href="https://www.instagram.com/cyber_bone/" target="_blank" rel="noopener noreferrer">
            Instagram
            </a>
            <a href="https://www.facebook.com/fadhilonly" target="_blank" rel="noopener noreferrer">
            Facebook
            </a>
      </div>
   </Col>
   <Col  xl={7}>
   <div id="contact-formular">
              <div id="message" />
              <form onSubmit={this.handleForm} name="contactform" id="contactform">
                {/* name */}
                <div className="form-group">
                  <div className="placeholder">Your name</div>
                  <input className="inp" name="name" type="text" id="name" onChange={this.handleFields} />
                </div>
                {/* subject */}
                <div className="form-group">
                  <div className="placeholder">Subject</div>
                  <input className="inp" name="subject" type="text" id="subject" onChange={this.handleFields}/>
                </div>
                {/* email */}
                <div className="form-group">
                  <div className="placeholder">Your e-mail</div>
                  <input className="inp" name="email" type="text" id="email" onChange={this.handleFields} />
                </div>
                
                {/* about project */}

                <div className="form-group">
                  <div className="placeholder">Your Message</div>
                  <textarea className="inp" name="message" id="message" rows={1} placeholder defaultValue={""} onChange={this.handleFields} />
                </div>
                {/* button */}
                <div className="form-btn">
                  <input className="site-btn" type="submit" defaultValue="Sent it" />
                </div>
                <div className="success-message">
                <label></label>
              </div>
              </form>
            </div>
   </Col>
</Row>
      </>
    );
  }
}

export default ContactMeForm;


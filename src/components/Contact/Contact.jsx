import React from "react";
import classes from "./Contact.module.css";

import ContactMeForm from './ContactMeForm';

import { Col,Container,Row } from 'react-bootstrap';


 const Contact = () => {
   return ( 
      <>
      <div className={classes.conatctWrapper}>
         <h1>Conatct</h1>
         <Container>
         <h2 className="section-title">Get in touch</h2>
            <ContactMeForm/>
         </Container>
      </div>
      </>
    );
 }
  
 export default Contact;




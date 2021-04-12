import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';
import * as emailjs from 'emailjs-com';
import swal from 'sweetalert';




import './Contact.styles.scss';



const ContactPage = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (evt) => {   
  
    evt.preventDefault();
    let templateParams = {
       
        name: fullName,
        from_name: email,
        to_name: 'ksaini7595@gmail.com',
        message: message,
        }

        handleVerification(templateParams);
    }

    const handleVerification=(templateParams)=>{ 

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE,
            templateParams,
            process.env.REACT_APP_USER_ID_EMAILJS).then(function(response) {
            
              
                    swal({
                        title: `Thank You ${fullName}!`,
                        text: `I'll be in touch soon!`,
                        icon: "success",
                        timer: 5000,
                        buttons: { cancel: null }
    
                    });
            

            }, function(error) {
                swal({
                    title: `Message not sent!`,
                    text: `Please email me: ksaini7595@gmail.com`,
                    icon: "error",
                    timer: 5000,
                    buttons: { cancel: null }

                });

              //  console.log('userid' + ''+ process.env.REACT_APP_SERVICE_ID);
                console.log(error);
            });
            clearForm();
            }

            
            const clearForm = ()=>{
            setFullName('');
            setEmail('');
            setMessage('');
            }
    

    return (

        <div>
            <FadeIn transitionDuration="1000">
                <Container className='mt-5 contact-container'>
                    <h1 className="contact-header">Say Hello!</h1>
                </Container>
            </FadeIn>
            <FadeIn transitionDuration="2000">
              
                <Col md={12} className="contact-form mb-10">
                    <Form className="justify-content-center" onSubmit={handleSubmit}>
                        <FormGroup controlid="formBasicName">
                            <Label className="d-block text-center">Name</Label>
                            <Input
                                type="text"
                                name="fullname"
                                placeholder="Name"
                                value={fullName} 
                                onChange={e=>setFullName(e.target.value)} 
                                required

                               
                            />
                        </FormGroup>


                        <FormGroup controlid="formBasicEmail">
                            <Label className="d-block text-center">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                placeholder="Email"
                                value={email} 
                                onChange={e=>setEmail(e.target.value)} 
                                required
                           

                            />
                        </FormGroup>

                     

                        <FormGroup controlid="formBasicMessage">
                            <Label className="d-block text-center">Message</Label>
                            <Input row={3}
                                type="textarea"
                                name="message"
                                placeholder="Say hello!"
                                value={message} 
                                onChange={e=>setMessage(e.target.value)} 
                                required
                              
                            />
                        </FormGroup>
                    
                        <Row className="justify-content-center mt-4">

                            <Button type="submit" >Submit</Button>
                        </Row>

                    </Form>
                </Col>
            </FadeIn>
        </div>

    )
};


export default ContactPage;
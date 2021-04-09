import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import karishma_profile from '../../Images/portfolio_3.png';
import ProjectPage from '../Project/ProjectPage';
import Typewriter from 'typewriter-effect';


import './AboutPage.styles.scss';

const AboutPage = () => {

   return(
<React.Fragment>
    <div>
    <Container className="about-container">
   <Row className='justify-content-center'>
       <Col xs={3} >
           <Image className='about-profile ' src={karishma_profile} />
       </Col>
   </Row>
   <Row>
       <Col md={12}>
     
       <Typewriter  options={{
    strings: ['Hello I\'m Karishma', 'Front-end Developer', 'UX Designer', 'Artist'],
    autoStart: true,
    loop: true,
  }}
/>
         
        
        
          <p className='about-body'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
       </Col>
   </Row>
    </Container>

    </div>
    <ProjectPage/>
</React.Fragment>
   )

   }

export default AboutPage;
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
          I’ll always love art. Art invites creative ideas to come alive and provides an environment to express myself as an individual who loves to create intricate henna style designs. 
          I leverage my creative skills to develop beautiful, user-friendly websites. 
          As a front-end developer, it is critical that my websites are responsive, have properly positioned components, and have pleasing color schemes. 
          The latter is where my artistic skills come into play. When painting, I choose color palettes that will attract my audience’s eye. 
          When developing a website, I use color to draw the user to important areas of the page, making it easy to navigate. 
          As a self-taught UX designer, I learned the importance of creating user-friendly websites. I have learned how to create mock-ups and wireframes to develop such websites. 
          I couldn’t predict that web design and development would become my passion. 
          It’s interesting how being an artist allows me to expand my skill set into the roles of a developer and UX designer.</p>
       </Col>
   </Row>
    </Container>

    </div>
    <ProjectPage/>
</React.Fragment>
   )

   }

export default AboutPage;
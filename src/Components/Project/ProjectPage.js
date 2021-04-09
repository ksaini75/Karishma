import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';



import './Project.styles.scss';


class ProjectPage extends React.Component {
  render() {
   return(
     <React.Fragment>
     <div className='project-div'>
        <Container className="project-title" id="Projects">
            <h1>Projects</h1>
        </Container>


      <Container className="project-container">
        <Jumbotron className="project-jumbo" fluid>
            <Container>
            <h1 className ="project-subtitle">George Samuels II Portfolio</h1>
            <Row>
                    <Col lg={6}> 
                        <Image  className='project-image' thumbnail/> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> React.js | Firebase | EmailJS API</p>
                        <p className = "project-content">

                        Art Portfolio For MadGiraffeStudios
                        </p>
                    
                        <br/>
                            <a href="http://madgiraffestudios.com"  target="_blank" rel="noreferrer">
                                <p className="view-project"> View Project</p>
                            </a>
                        </Col>
                </Row> 
            </Container>
        </Jumbotron>


</Container>
 

 <Container className="project-container">
        <Jumbotron className="project-jumbo" fluid>
            <Container>
            <h1 className ="project-subtitle">KCElectricialContractor Website</h1>
            <Row>
                    <Col lg={6}> 
                        <Image  className='project-image' /> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> Unity | Oculus SDK </p>
                        <p className = "project-content">

                        A VR mobile application that will be used to improve the health and care of the elderly. 
                        Atmosphere allows users to destroy asteroids in space together. 
                        By connecting elderly users over WiFi with friends and family we hope reduce the pain that is felt throughout everyday life.
                        </p>
                    
                        <br/>

                        </Col>
                </Row> 
            </Container>
        </Jumbotron>


</Container>


<Container className="project-container">
        <Jumbotron className="project-jumbo" fluid>
            <Container>
            <h1 className ="project-subtitle">Erika Moya Portfolio</h1>
                <Row>
                    <Col lg={6}> 
                        <Image  className='project-image' /> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> Andriod Studio | Google Maps API</p>
                        <p className = "project-content">

                        An On Campus Map for both Westchester and NYC Campuses. 
                        Search buildings, classes or even places to eat on campus and find your way around today! 
                        This application is an unofficial Campus application, made by a student for the public.
                        </p>
                    
                        <br/>
                        
                        </Col>
                </Row>      
            </Container>
        </Jumbotron>


</Container>

</div>



  
    
</React.Fragment>  
    
    );
  }
 }

 export default ProjectPage;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import FadeIn from 'react-fade-in';
import George_Portfolio from '../../Images/GeorgePortfolio.png';
import KC_Website from '../../Images/KC-website.png';
import Erika_Portfolio from '../../Images/ErikaMoya.png';
import Robofriends from '../../Images/Robofriends.png';
import Yelpcamp from '../../Images/Yelpcamp.png';
import FaceRecongition from '../../Images/Facerecongition.png';
import ErikaUX from '../../Documents/ErikaMoyaUX.pdf';
import GeorgeUX from '../../Documents/GeorgePortfolioUX.pdf';
import KCElectricialContractorUX from '../../Documents/KCElectricalContractor.pdf';

import './Project.styles.scss';


class ProjectPage extends React.Component {
  render() {
   return(
     <React.Fragment>
     
     <div className='project-div'>
     <FadeIn transitionDuration="2000">
        <Container className="project-title" id="Projects">
       
            <h1>Projects</h1>
      
        </Container>
        </FadeIn>

        <FadeIn transitionDuration="4500">
      <Container className="project-container">
        <Jumbotron className="project-jumbo" fluid>
            <Container>
            <h1 className ="project-subtitle">George Samuels II Portfolio</h1>
            <Row>
                    <Col lg={6}> 
                        <Image  className='project-image' src={George_Portfolio} thumbnail/> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> React.js | Procreate | Figma | EmailJS API</p>
                        <p className = "project-content">

                        Designed and developed a software engineer portfolio for job searching purposes.
                        Use Procreate for sketches, and use Figma to translate my sketches to high fidelity wireframes. 
                        Used React.js, Bootstrap 4, Email.JS and used Netlify to deploy the website to production.
                        </p>
                    
                        <br/>
                            <a className="project-link" href="https://georgesamuels.netlify.app"  target="_blank" rel="noreferrer">
                                <p className="view-project"> View Project</p>
                            </a>

                            <a className="project-link" href={GeorgeUX} target="_blank" rel="noreferrer">
                                <p className="view-project"> UX Document</p>
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
                        <Image  className='project-image' src={KC_Website}  thumbnail/> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> React.js | Procreate | Figma | EmailJS API</p>
                        <p className = "project-content">

                        Designed and developed a company website for an electrian for his buisness. 
                        The website will allow customers to request an estimate for his electrical services.
                        Used React.js, Bootstrap 4, Email.JS and used Netlify to deploy the website to production.
                        </p>
                    
                        <br/>

                        <a className="project-link" href="https://kcelectricalcontractorllc.netlify.app"  target="_blank" rel="noreferrer">
                                <p className="view-project"> View Project</p>
                            </a>

                            <a className="project-link" href={KCElectricialContractorUX} target="_blank" rel="noreferrer">
                                <p className="view-project"> UX Document</p>
                            </a>

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
                        <Image  className='project-image' src={Erika_Portfolio} thumbnail/> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> React.js | Procreate | Figma | EmailJS API </p>
                        <p className = "project-content">

                        Build an eye-catching client portfolio, the client is a mental health counselor. 
                        Use AdobeXD to create wire-frames and mock up of the designs for the client. 
                        The client requested a portfolio for job-searching purposes. 
                        Used React.js, Bootstrap 4, Email.JS and used Netlify to deploy the website to production.
                        </p>
                    
                        <br/>
                        <a className="project-link" href="https://erikamoya.netlify.app"  target="_blank" rel="noreferrer">
                                <p className="view-project"> View Project</p>
                            </a>

                            <a className="project-link" href={ErikaUX} rel="noreferrer" target="_blank">
                                <p className="view-project"> UX Document</p>
                            </a>
                        </Col>
                </Row>      
            </Container>
        </Jumbotron>
</Container>


<Container className="project-container">
        <Jumbotron className="project-jumbo" fluid>
            <Container>
            <h1 className ="project-subtitle">FaceRecognition Application</h1>
                <Row>
                    <Col lg={6}> 
                        <Image  className='project-image' src={FaceRecongition} thumbnail/> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> JavaScript | React.js | Tachyons | Heroku | Express | PostgresQl</p>
                        <p className = "project-content">

                        A face recognition web app has a front end using React.js, a simple REST API for back-end, a server with Express, deployed to Heroku.
                        </p>
                    
                        <br/>

                        <a href="https://facerecognition21.herokuapp.com"  target="_blank" rel="noreferrer">
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
            <h1 className ="project-subtitle">RoboFriends Application</h1>
                <Row>
                    <Col lg={6}> 
                        <Image  className='project-image' src={Robofriends} thumbnail/> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> JavaScript | React.js | GitHub Pages | Git | Tachyons </p>
                        <p className = "project-content">

                        This simple application allows users to fetch data from the Robohash API with a responsive searchability function to search a specific roboFriend from the list.
                        </p>
                    
                        <br/>
                        <a  href="https://ksaini75.github.io/Robofriend/"  target="_blank" rel="noreferrer">
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
            <h1 className ="project-subtitle">YelpCamp API</h1>
                <Row>
                    <Col lg={6}> 
                        <Image  className='project-image' src={Yelpcamp} thumbnail/> 
                    </Col>
                
                    <Col lg={6} >
                        <p className="project-tools"> HTML5 | JavaScript | Boostrap 4 | Node.js | Express | Mongo DB</p>
                        <p className = "project-content">

                        YelpCamp is another version of Yelp Reviews but it allows users to review campgrounds. 
                        The users are able to view the different campgrounds available, read the comments and the reviews of each campgrounds. 
                        Users can create campgrounds, submit reviews along with a rating of the campgrounds from 1 star to 5 stars.
                        </p>
                    
                        <br/>
                        <a  href="https://safe-gorge-94321.herokuapp.com"  target="_blank" rel="noreferrer">
                                <p className="view-project"> View Project</p>
                            </a>
                        
                        </Col>
                </Row>      
            </Container>
        </Jumbotron>
</Container>

</FadeIn>
</div>



  
    
</React.Fragment>  
    
    );
  }
 }

 export default ProjectPage;
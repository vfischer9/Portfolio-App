import React from 'react';
import { Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap';
import letterV from '../images/letterV.png';
import covidApp from '../images/covidApp.JPG';
import cinemafi from '../images/cinemafi.png';
import pomodoro from '../images/pomodoro.JPG';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import email from '../images/email.png';
import copyright from '../images/copyright.png';
import phone from '../images/phone-call.png';
import vfischer from '../images/vfischer.JPG';
import Resume from './Resume';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {

    Element.prototype.documentOffsetTop = function () {
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
    };

    function scrollToProjects(){
        var elemToScroll = document.getElementById('projects');
        elemToScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
    }

    function scrollToContact(){
        var elemToScroll = document.getElementById('contact');
        elemToScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    function scrollToResume(){
        var elemToScroll = document.getElementById('resume');
        elemToScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    function scrollToTop(){
        var elemToScroll = document.getElementById('top');
        elemToScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }


    function openEmail(){
        window.open('mailto:vfisch0430@gmail.com?subject=Subject&body=Body%20goes%20here')
    }

    return (
        <div className='application'>
            <img onClick={scrollToTop} src={letterV} alt='V' className='clickable letterV sticky'></img>
            <h1 className='myName' id='top'>VICTORIA FISCHER</h1>
            <Container>
                <Navbar className='navigate' expand="lg" variant="light">
                    <Container>
                    <Navbar.Brand className='navItem' onClick={scrollToProjects}>Projects</Navbar.Brand>
                    <Navbar.Brand className='line'>|</Navbar.Brand>
                    <Navbar.Brand className='navItem' onClick={scrollToContact}>Contact</Navbar.Brand>
                    <Navbar.Brand className='line'>|</Navbar.Brand>
                    <Navbar.Brand className='navItem' onClick={scrollToResume}>Resume</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>

            <Container className='about'>
                <h3 className='head'>Introduction</h3>
                <p>Hi! My name is Victoria Fischer, and I'm an aspiring software engineer.
                    <br></br>
                    I have passions for both front-end and backend work. I love to express my creativity in
                    <br></br>
                    the front-end and challenge my server-side understandings in the backend.
                    <br></br>
                    My passion for development comes from my enjoyment of brainstorming, 
                    <br></br>
                    strategizing, and designing.
                </p>
                <img className='vfischer' src={vfischer}></img>
            </Container>


            <Container fluid id='projects'>
                <h3 className='head'>Featured Work</h3>
                        <Container className='cards'>
                        <Card className='card'>
                            <Card.Img className='covidAppImg' variant="top" src={covidApp} />
                            <Card.Body>
                                <Card.Title>Covid-19 Virtual Test</Card.Title>
                                <Card.Text>
                                <i>Covid-19 Virtual Test</i> is an application that works as a Covid-19 self-tester. 
                                The app displays the user's likelihood of having contracted COVID-19 upon answering a series of
                                questions. This application served as my senior capstone project and was presented at the CUNY Virtual 
                                Undergraduate Research Conference.
                                </Card.Text>
                            </Card.Body>
                            <Button href='https://covidvirtualtest.herokuapp.com/' target='_blank' variant="dark">Visit the App</Button>
                        </Card>

                        <Card className='card'>
                            <Card.Img className='cinemafiImg' variant="top" src={cinemafi} />
                            <Card.Body>
                                <Card.Title>Cinemafi</Card.Title>
                                <Card.Text>
                                The collaborative <i>Cinemafi</i> is an application that serves 
                                as an online database of movie information. The application contains data such as 
                                movie plot, cast, runtime, reviews, and posters. Users who sign up have the ability
                                to like, comment on, or favorite movies.
                                </Card.Text>
                            </Card.Body>
                            <Button href='https://www.youtube.com/watch?v=i6FNOEpRAWA' target='_blank' variant="dark">View the App</Button>
                        </Card>

                        <Card>
                            <Card.Img className='pomodoroImg' variant="top" src={pomodoro} />
                            <Card.Body>
                                <Card.Title>Pomodoro Clock</Card.Title>
                                <Card.Text>
                                The <i>Pomodoro Clock</i> application is a time management tool that emulates the 
                                pomodoro technique. The timer breaks work down into intervals of 5 minutes, allowing
                                the user the options of taking a break, adding more time, or subtracting time. 
                                </Card.Text>
                            </Card.Body>
                            <Button href='https://pomodoroclock-vfisch.netlify.app/' target='_blank' variant="dark">Visit the App</Button>
                        </Card>
                        </Container>
            </Container>
            

            <Container fluid id='contact'>
                <h3 className='head'>Contact Me</h3>
                <p>I am currently looking for development opportunities! I can be reached by the following:</p>
                <p>
                <a className='clickable' onClick={openEmail}><img src={email} className='contactPic'></img></a> vfisch0430@gmail.com
                <br></br>
                <img src={phone} className='contactPic'></img> (917) 831-8913
                <br></br>
                <a target='_blank' href='https://www.linkedin.com/in/vfischer9/'><img src={linkedin} className='contactPic me-2'></img></a>
                <span className='m-1'></span>
                <a target='_blank' href='https://github.com/vfischer9'><img src={github} className='contactPic me-2'></img></a>
                </p>
            </Container>

        

            <Container fluid id='resume'>
                <h3 className='head mb-4'>My Resume</h3>
                <Resume />
            </Container>

            <br></br><br></br><br></br><br></br><br></br>
            

            <footer className='footer'><img id='copyright' src={copyright}></img> Built & Designed By Victoria Fischer</footer>
            
        </div>
    )
}

export default Home;

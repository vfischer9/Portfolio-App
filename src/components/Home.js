import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import letterV from '../images/letterV.png'

function Home() {
    return (
        <div>
            <h1 className='myName'>VICTORIA FISCHER</h1>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <img src={letterV} alt='V' className='letterV'></img>
                    <Container className='justify-content-end'>
                    <Navbar.Brand href="#">About</Navbar.Brand>
                    <Navbar.Brand>|</Navbar.Brand>
                    <Navbar.Brand href="#">Projects</Navbar.Brand>
                    <Navbar.Brand>|</Navbar.Brand>
                    <Navbar.Brand href="#">Contact</Navbar.Brand>
                    <Navbar.Brand>|</Navbar.Brand>
                    <Navbar.Brand href="#">Resume</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Home;

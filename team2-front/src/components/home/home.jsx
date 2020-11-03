import React from 'react';
import './home.css';
import {Container, Row} from 'react-bootstrap';

export class Home extends React.Component{ 

render(){
      return <>
    <Container className = "justify-content-center">
      <Row>
      <h1> Project Tracker</h1>
      </Row>

      <Row>     
    <p> Project tracking and coordination for the Defense industry. </p>
    </Row>

      <Row>
    {/*  add this back when props functions are set up and other pages are made <button onClick={() => this.onLoginClick()}  */}
    <button type="button" className = "btn btn-primary">
          Login
    </button>
    </Row>

      <Row>
    <button type="button" className = "btn btn-primary">
          Register
    </button>
    </Row> 
      
    </Container>
    </>;
      
}
}
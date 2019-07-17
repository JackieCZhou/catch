 import React, { Component } from "react";
import './home.css';
import Signup from '../../signup';
import Modal from '../../components/Modal/modal.js';

class Home extends Componenet {

    componentDidMount() {

    }

    render() {
        return (
            <div className="home">
                <div className="container" style={{ background:}}>
                    <img src='../assets/finalcatchlogo.png' style={{ width: '100px', opacity: 'none' }} />
                    <br />
                    <h1 style={{ background: 'transparent', color: 'black', border: 'black' }}>Never miss another job opportunity again!</h1>
                </div>

                <h3>Sign up Today to gain access to the new wave of recruiting and job hunting.
            <br />
                    Recruiters can use Catch to save, categorize and share potentional employees with their teams to find
                    the best person for the job fast.
            <br />
                    Looking for a job? Catch is a one stop shop for organizing and sharing your resume, portfolio, Github, Linkedin,
                    and other hireable materials so you're ready no matter where you make a connection.
                </h3>
                <br />

                <h2>
                    Login or Sign Up Today!
                </h2>
            </div>
        )
    }
    render() {
        let { signUpToday, showModal } = this.props.sinup;
        return (
            <div>
                <Signup />
            </div>
        )
    }
}
export default Home;




// Home page info and rendering signup modal.
// signup modal links you to the create account page
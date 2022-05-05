import './About.css'
import React from 'react';
import ok from './img/ok.png';

function About() {
    return (
        <section className="About">
            <h3>About us</h3>
            <p>We are very very good! <i>OK?</i></p>
            <img class="ok" alt="ok" src={ok}/>
        </section>
    );
}
export default About;
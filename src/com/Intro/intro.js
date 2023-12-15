import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import CV from './nayebcv2023.pdf'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Nayeb Towki,</span> <br />a Cybersecurity Enthusiast <br />& Full-Stack Web Developer</span>
                <p className="introPara">As a passionate technologist, I am dedicated to merging the analytical rigor of cybersecurity <br/> and machine learning with the creative artistry of web development. My journey is a blend of <br/> securing digital landscapes and crafting engaging web experiences, showcasing a unique <br/>synergy between diverse technological domains.</p>
            <div>
                <a href={CV} target="_blank" rel="noopener noreferrer" download>
                    <button className="btn">Download My CV</button>
                </a>
            </div>
            
            </div>

            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
import React from 'react';
import './skills.css';
import Cybersecurity from '../../assets/cybersecurity.png';
import FullStackDev from '../../assets/fullstackdev.png';
import MachineLearning from '../../assets/machinelearning.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Combining the intricacies of Cybersecurity, the creativity of Full Stack Web Development, and the innovation of Machine Learning, I deliver tailored tech solutions. My approach is rooted in a deep understanding of digital security, a flair for building engaging web interfaces, and a passion for leveraging AI to solve complex problems and automate processes.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Cybersecurity} alt="Cybersecurity" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cybersecurity</h2>
                        <p>In Cybersecurity, my focus is on creating robust defenses against digital threats. I employ a blend of risk analysis, security protocols, and the latest cybersecurity trends to protect sensitive data and systems, ensuring the integrity and confidentiality of information in an increasingly connected digital world.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={FullStackDev} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Web Development</h2>
                        <p>As a Full Stack Web Developer, I specialize in developing dynamic, responsive websites and applications. My expertise spans from crafting engaging user interfaces with modern front-end technologies to architecting efficient back-end solutions, ensuring a seamless and cohesive user experience across all digital platforms.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MachineLearning} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Machine Learning (AI) </h2>
                        <p>In the dynamic field of Machine Learning, my focus is on developing intelligent solutions that can interpret and learn from vast data sets. I specialize in creating models that not only predict and analyze but also uncover subtle patterns, distinguishing between complex scenarios like human versus AI-generated text. My approach combines rigorous data analysis with innovative algorithmic strategies, aiming to harness the full potential of AI in understanding and emulating intricate human processes and behaviors.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
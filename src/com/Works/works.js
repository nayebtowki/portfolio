import React, {useState, useEffect} from 'react';
import './works.css';
import Github from '../../assets/GitHub.png';

const Works = ({nayebtowki}) => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const featuredRepos = ['ScientificCalculatorWithGUI', 'Advanced-Word-Counter', 'cs2001-2022_23-group-48', 'react-task-tracker']; 
    useEffect(() => {
        fetch(`https://api.github.com/users/${nayebtowki}/repos`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const filteredRepos = data.filter(repo => featuredRepos.includes(repo.name));
                setRepos(filteredRepos);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, [nayebtowki]);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <section id='works'>
            <h2 className="worksTitle">Welcome to My Portfolio</h2>
            <span className="worksDesc">Dive into a showcase where precision meets innovation. Here, I present a collection of my projects, each a testament to my commitment to excellence and meticulous attention to detail. From crafting secure and intuitive web applications to exploring the frontiers of Machine Learning, my portfolio is a reflection of my journey in blending technical expertise with creative problem-solving. I'm enthusiastic about leveraging these skills to help businesses and individuals establish a formidable online presence and navigate the ever-evolving digital landscape.</span>
            <div className="worksImgs">
                {repos.map(repo => (
                    <div key={repo.id} className="workItem">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt={repo.name} className="worksImg" />
                            <h4>{repo.name}</h4>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Works;
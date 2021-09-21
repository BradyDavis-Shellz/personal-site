import React from 'react';
import moment from 'moment';

const getYearsActive = () => {
    var start = moment([2015, 9]);
    return start.diff(Date.now());
}

const About = () => (
    <div className='about'>
        <h1>About Me</h1>
        <p data-testid="intro-paragraph">{`I am a software developer with over ${getYearsActive()} years of experience. I've worked on a variety of projects and am versed with many different programming languages and frameworks.`}</p>
    </div>
);

export default About;
import React from 'react';

import {getYearsActive} from '../../utils/about-me-helpers';

import {PreviousWorkExperience} from './previous-work-experience';

const About = () => (
    <div className="about">
        <h1>{'About Me'}</h1>
        <p data-testid="intro">{`I am a software developer with over ${getYearsActive()} years of experience. I've worked on a variety of projects and am versed with many different programming languages and frameworks.`}</p>
        <PreviousWorkExperience />
    </div>
);

export default About;

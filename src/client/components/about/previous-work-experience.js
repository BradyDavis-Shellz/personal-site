import React from 'react';
import styled from 'styled-components';

const ExperienceItem = styled.div`
    margin-bottom: 12px;
`;

const CompanyName = styled.h2`
    margin-bottom: 8px;
`;

const SubHeading = styled.div`
    color: SlateGray;
`;

const ResponsibilitiesList = styled.ul`
    margin-top: 12px;
    margin-left: 20px
`;

const previousWorkExperienceList = [
    {
        dates: 'Feb 2018 - Present',
        name: 'Source Allies',
        position: 'Software Developer Consultant',
        responsibilities: [
            'Updated and maintained React & React-Native client Ecommerce applications',
            'Worked on back-end node.js GraphQL and REST APIs',
            'Maintained legacy .NET applications',
            'Used Google Pub/Sub to capture & respond to user events'
        ],
        url: 'https://www.sourceallies.com/'
    },
    {
        dates: 'Sep 2015 - Jan 2018',
        name: 'Scientific Games',
        position: 'Game Developer',
        responsibilities: [
            'Developed Blazing 7\'s Casino Slots using Flash for Facebook, iOS, and Android platforms',
            'Detect & fix performance issues in game code',
            'Managed mobile app lifecycle in shared web/mobile code'
        ],
        url: 'https://www.scientificgames.com/'
    },
    {
        dates: 'Aug 2014 - Sep 2015',
        name: 'Telligen',
        position: 'Software Developer',
        responsibilities: [
            'Developed in-house .NET Windows Forms applications for use in processing MediCare claims'
        ],
        url: 'https://www.telligen.com/'
    }
];

/* eslint-disable react/no-array-index-key */
const PreviousWorkExperience = () => (
    <div>
        {previousWorkExperienceList.map((item, itemIndex) =>
            <ExperienceItem
                key={`item-${itemIndex}`}
            >
                <CompanyName>
                    {item.name}
                </CompanyName>
                <SubHeading>
                    <strong>{`From: ${item.dates}`}</strong>
                </SubHeading>
                <SubHeading>
                    <strong>{`Position: ${item.position}`}</strong>
                </SubHeading>
                <ResponsibilitiesList>
                    {item.responsibilities.map((listItem, listIndex) =>
                        <li
                            key={`list-${itemIndex}-${listIndex}`}
                        >
                            {listItem}
                        </li>
                    )}
                </ResponsibilitiesList>
            </ExperienceItem>
        )}
    </div>
);
/* eslint-enable react/no-array-index-key */

export {PreviousWorkExperience, previousWorkExperienceList};

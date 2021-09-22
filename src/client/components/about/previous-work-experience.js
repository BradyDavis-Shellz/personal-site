import React from 'react';

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
            <div
                key={`item-${itemIndex}`}
            >
                <h2>
                    {item.name}
                </h2>
                <div>
                    <strong>{`From: ${item.dates}`}</strong>
                </div>
                <div>
                    <strong>{`Position: ${item.position}`}</strong>
                </div>
                <ul>
                    {item.responsibilities.map((listItem, listIndex) =>
                        <li
                            key={`list-${itemIndex}-${listIndex}`}
                        >
                            {listItem}
                        </li>
                    )}
                </ul>
            </div>
        )}
    </div>
);
/* eslint-enable react/no-array-index-key */

export {PreviousWorkExperience, previousWorkExperienceList};

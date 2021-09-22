import React from 'react';
import {render} from '@testing-library/react';

import {previousWorkExperienceList, PreviousWorkExperience} from '../../../../src/client/components/about/previous-work-experience';

describe('previous work experience', () => {
    let component,
        getByText;

    beforeEach(() => {
        component = render(<PreviousWorkExperience />);

        getByText = component.getByText;
    });

    test('should post previous work experience for each company', () => {
        previousWorkExperienceList.forEach((item) => {
            expect(getByText(item.name)).toBeInTheDocument();
            expect(getByText(`From: ${item.dates}`)).toBeInTheDocument();
            expect(getByText(`Position: ${item.position}`)).toBeInTheDocument();

            item.responsibilities.forEach((res) => {
                expect(getByText(res)).toBeInTheDocument();
            });
        });
    });
});

import Chance from 'chance';
import React from 'react';
import {cleanup, render} from '@testing-library/react';

import About from '../../../src/client/components/about';
import {getYearsActive} from '../../../src/client/utils/about-me-helpers';

const chance = new Chance();

jest.mock('../../../src/client/utils/about-me-helpers');

describe('about page', () => {
    let component, getByText, queryByTestId, expectedYearDiff;

    beforeEach(() => {
        expectedYearDiff = chance.natural();

        getYearsActive.mockReturnValue(expectedYearDiff);

        component = render(<About />);

        queryByTestId = component.queryByTestId;
        getByText = component.getByText;
    });

    afterEach(() => {
        jest.resetAllMocks();
        cleanup();
    });

    test('should render title', () => {
        const title = getByText('About Me');

        expect(title).toBeInTheDocument();
    });
    
    test('should render intro paragraph correctly', () => {
        const paragraph = queryByTestId('intro');

        expect(paragraph).toBeInTheDocument();
    });

    test('should call to getYearsActive', () => {
       expect(getYearsActive).toHaveBeenCalledTimes(1);
    });
});
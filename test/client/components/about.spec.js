import Chance from 'chance';
import React from 'react';
import {render} from '@testing-library/react';

import About from '../../../src/client/components/about';

const chance = new Chance();

describe('about page', () => {
    let component, getByText, getByTestId, expectedYearDiff;

    beforeAll(() => {
        expectedYearDiff = chance.natural();

        component = render(<About />);

        getByTestId = component.getByTestId;
        getByText = component.getByText;
    })

    test('should render title', () => {
        const title = getByText('About Me');

        expect(title).toBeInTheDocument();
    });
    
    test('should render intro paragraph correctly', () => {
        const paragraph = component.queryByTestId('intro-paragraph');
        
        expect(paragraph).toBeInTheDocument();
    });
});
import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Contact from '../../../src/client/components/contact';

describe('contact page', () => {
    let component,
        getByText,
        queryByTestId;

    beforeEach(() => {
        component = render(<Contact />);

        queryByTestId = component.queryByTestId;
        getByText = component.getByText;
    });

    afterEach(() => {
        cleanup();
    });

    test('should render title', () => {
        const title = getByText('Contact Me');

        expect(title).toBeInTheDocument();
    });

    test('should render intro paragraph correctly', () => {
        const paragraph = queryByTestId('intro-paragraph');

        expect(paragraph).toBeInTheDocument();
    });
});

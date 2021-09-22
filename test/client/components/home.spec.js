import React from 'react';
import {cleanup, render} from '@testing-library/react';

import Home from '../../../src/client/components/home';

describe('home page', () => {
    let component,
        getByText;

    beforeEach(() => {
        component = render(<Home />);

        getByText = component.getByText;
    });

    afterEach(() => {
        cleanup();
    });

    test('should render title', () => {
        const title = getByText('Welcome to my portfolio website');

        expect(title).toBeInTheDocument();
    });

    test('should render intro paragraph correctly', () => {
        const paragraph = getByText('Feel free to browse around and learn more about me.');

        expect(paragraph).toBeInTheDocument();
    });
});

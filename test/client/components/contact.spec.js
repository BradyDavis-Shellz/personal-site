import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Contact from '../../../src/client/components/contact';

describe('contact page', () => {
    let component,
        getByText,
        queryByTestId;

    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        queryByTestId = component.queryByTestId;
        getByText = component.getByText;

        window.open = jest.fn();
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

    describe('email link', () => {
        test('should set window location on click', () => {
            const email = queryByTestId('email-link');

            fireEvent.click(email);

            expect(window.open).toHaveBeenCalledTimes(1);
            expect(window.open).toHaveBeenCalledWith('mailto:bradydavis.ver.2.0@gmail.com');
        });
    });
});

import React from 'react';
import {Link} from 'react-router-dom';

const email = 'bradydavis.ver.2.0@gmail.com';

const Contact = () => (
    <div className="contact">
        <h1>{'Contact Me'}</h1>
        <p data-testid="intro-paragraph">
            {'You can reach me via email: '}
            <Link
                data-testid="email-link"
                onClick={(event) => {
                    event.preventDefault();

                    window.open(`mailto:${email}`);
                }}
                to="#"
            >
                {email}
            </Link>
        </p>
    </div>
);

export default Contact;

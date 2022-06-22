import { render, screen } from '@testing-library/react';
import { renderWithRouter } from '../tests/helpers/render-with-router';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/store';

import Navbar from './navbar';
import { renderApp } from '../tests/helpers/render-app';

describe('Navbar', () => {
    it('test about link', () => {
        renderApp(<Navbar />)
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    it('test main link', () => {
        renderApp(<Navbar />)

        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    it('test users link', () => {
        renderApp(<Navbar />)

        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    })
})
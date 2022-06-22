import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createReduxStore } from '../src/store/store';

jest.mock('axios');

describe("Test-App", () => {
    it('test routes', () => {
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        expect(screen.queryByTestId('main-page')).not.toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        expect(screen.queryByTestId('about-page')).not.toBeInTheDocument();
    });
    it('render error page with wrong route', () => {
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter initialEntries={['/jwjvcbewjkvcbw']}>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });
    it('render user details page with id 2', async () => {
        let mockedResponse = {
            data: [
                {
                    id: 1,
                    name: "Mykola"
                },
                {
                    id: 2,
                    name: "Olena"
                },
                {
                    id: 3,
                    name: "Mirko"
                },
            ]
        };
        axios.get.mockReturnValue(mockedResponse);
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        const users = await screen.findAllByTestId('user-item');
        expect(users).toHaveLength(3);
        userEvent.click(users[2]);
        expect(screen.getByText('User Details')).toBeInTheDocument()
    })
})
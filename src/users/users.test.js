import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import Users from './users';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../tests/helpers/render-with-router';

jest.mock('axios');

describe('Users', () => {

    let mockedResponse;
    beforeEach(() => {
        mockedResponse = {
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

    });

    afterEach(() => {
        jest.clearAllMocks();
    })
    test('show users', async () => {
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        );
        // const users = await screen.findAllByTestId('user-item');
        const users = await waitFor(() => screen.getAllByTestId('user-item'), { timeout: 54000 });
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);

    });
    test('redirect to details page', async () => {

        renderWithRouter(null, '/users')

        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        userEvent.click(users[2]);
        expect(screen.getByTestId('user-details')).toBeInTheDocument();

    })
});

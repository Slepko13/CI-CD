import { Counter } from "./counter";
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/store';
import { renderWithRedux } from '../tests/helpers/render-with redux';



describe("Counter", () => {
    test('init value', () => {
        const { getByTestId } = renderWithRedux(<Counter />)
        expect(getByTestId('counter-value')).toBeInTheDocument();
        expect(getByTestId('counter-value')).toHaveTextContent('0');
        const increnemtBtn = getByTestId('increment-btn');
        userEvent.click(increnemtBtn);
        expect(getByTestId('counter-value')).toHaveTextContent('1');
    });

    test('custom store value', () => {
        const { getByTestId } = renderWithRedux(<Counter />, { counter: { value: 2 } });
        expect(getByTestId('counter-value')).toBeInTheDocument();
        expect(getByTestId('counter-value')).toHaveTextContent('2');
        const increnemtBtn = getByTestId('increment-btn');
        userEvent.click(increnemtBtn);
        expect(getByTestId('counter-value')).toHaveTextContent('3');
    })
})
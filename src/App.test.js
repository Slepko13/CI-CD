import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';
import { MemoryRouter } from 'react-router-dom';


import App from './App';


describe('App', () => {
  test('renders text, button and input', () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const headingElement = screen.getByRole('heading', { name: /hello world/i });
    const buttonElement = screen.getAllByRole('button', { name: /click me/i });
    const inputElement = screen.getByPlaceholderText(/input value/i)
    expect(headingElement).toBeInTheDocument();
    expect(buttonElement[0].textContent).toBe("Click me");
    expect(inputElement.value).toBe("init");
    expect(inputElement.placeholder).toBe("input value");
  });

  test('blockquote should not be at the page', () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const blockquoteElement = screen.queryByRole('blockquote');
    expect(blockquoteElement).toBe(null);
    expect(blockquoteElement).not.toBeInTheDocument();

  });

  test('data text should not be at the page', async () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const dataElement = await screen.findByText(/data/i, {}, { timeout: 5010 });
    const test = await waitFor(() => screen.getByText(/data/i), { timeout: 20 })//?????????????!!
    expect(dataElement).toBeInTheDocument();
    expect(dataElement).toHaveStyle({ color: 'red' });
    expect(test).toBeInTheDocument();
  });

  test('click event toggle', async () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const btn = screen.queryByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBe(null);
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBe(null);
  });

  test('change event toggle', async () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
    const inputElement = screen.getByPlaceholderText(/input value/i);
    expect(screen.getByTestId("value-elem").textContent).toBe("init");
    fireEvent.change(inputElement, { target: { value: "input value" } });
    expect(screen.getByTestId("value-elem").textContent).toBe("input value");
    userEvent.type(inputElement, " add")
    expect(screen.getByTestId("value-elem").textContent).toBe("input value add");
  });
})

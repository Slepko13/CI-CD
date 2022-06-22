import { MemoryRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import AppRouter from "../../router/app-router";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";



export const renderApp = (component, initialState, initialRoute = '/') => {
    const store = createReduxStore(initialState);
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )

}

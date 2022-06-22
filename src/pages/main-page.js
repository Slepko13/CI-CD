import React from 'react';
import { Counter } from '../counter/counter';

const MainPage = () => {
    return (
        <div data-testid="main-page">
            Main Page
            <br />
            <br />

            <Counter />
            <br />
        </div>
    );
}

export default MainPage;
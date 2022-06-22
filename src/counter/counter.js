import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/reducers/counter-reducer';
import { getCounterValue } from '../store/reducers/selectors/get-counter-value/get-counter-value';

export function Counter() {
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <div data-testid='counter-value'>{count}</div>

                <button
                    data-testid='increment-btn'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <button
                    data-testid='decrement-btn'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
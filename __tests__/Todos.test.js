import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Todos from '../src/Todos';

const mockStore = configureStore();

const initialState = {
    todos : [
        {id: 0, text: "Trabalhar"},
        {id: 1, text: "Estudar react"},
        {id: 2, text: "Descansar"},
    ]
};

const store = mockStore(initialState);

describe('Testing Todos component', () => {
    it('should render correctyl', () => {
        const wrapper = shallow(
            <Todos />,
            { context: { store }}
        ).dive();

        expect(wrapper.debug()).toMatchSnapshot();
    })
});
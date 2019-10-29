import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Testing app component', () => {
    it('should render correctyl', () => {
        const wrapper = shallow(
            <App />
        );

        expect(wrapper).toMatchSnapshot();
    })
});
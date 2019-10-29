import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../src/Counter';

describe('Testing Counter component', () => {
    it('should render correctyl', () => {
        const wrapper = shallow(
            <Counter count={5} />
        );

        expect(wrapper.debug()).toMatchSnapshot();
        wrapper.setProps({ count: 10 });
        expect(wrapper.debug()).toMatchSnapshot();
    })
});
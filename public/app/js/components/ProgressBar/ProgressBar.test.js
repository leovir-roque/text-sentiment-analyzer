import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar Test', () => {
    const wrapper = shallow(
      <ProgressBar label='Sample label' value='50%' />
    );

    it('renders the component', () => {
        expect(wrapper.exists()).toEqual(true);
    })

    it('renders the component with label', () => {
        const label = wrapper.find('.progress__label');

        expect(label.text()).toBe('Sample label');
    });

    it('renders the component with the right value', () => {
        const value = wrapper.find('.progress__value');

        expect(value.prop('style').width).toBe('50%');
    });
});

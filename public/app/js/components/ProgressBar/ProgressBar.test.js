import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar Test', () => {
    it('Renders the component with props', () => {
        const wrapper = shallow(
          <ProgressBar label='Sample label' value='50%' />
        );

        const label = wrapper.find('.progress__label');
        const value = wrapper.find('.progress__value');

        expect(label.text()).toBe('Sample label');
        expect(value.prop('style').width).toBe('50%');
    });
});

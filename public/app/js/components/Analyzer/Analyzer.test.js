import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Analyzer from './Analyzer';

describe('Analyzer Test', () => {
    const wrapper = shallow(
      <Analyzer title="Sample Title" />
    );

    it('renders the component', () => {
        expect(wrapper.exists()).toEqual(true);
    })

    it('component renders the title', () => {
        const title = wrapper.find('.analyzer__title');

        expect(title.text()).toBe('Sample Title');
    });

    it('records data on change', () => {
        const inputValue = "I have a dream a song to sing";

        wrapper.find('.analyzer__textarea').simulate('change', {target: {value: inputValue}});
        expect(wrapper.state().value).toEqual(inputValue);
    });
});

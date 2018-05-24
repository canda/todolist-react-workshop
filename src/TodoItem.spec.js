import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  it('renders TodoItem label', () => {
    const wrapper = shallow(<TodoItem label="Create a todo item." />);
    expect(wrapper.text()).toBe('Create a todo item.');
  });
});

import React from 'react';
import {shallow} from "enzyme";
import Menu from './Menu';

describe('Menu Component', () => {
   it('renders correctly', () => {
      const component = shallow(<Menu />);
      expect(component).toMatchSnapshot();
   });
});
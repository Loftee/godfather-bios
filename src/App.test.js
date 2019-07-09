import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('has a menu component', () => {
        expect(app.find('Menu').exists()).toBe(true);
    });

    it('has a SelectedEmployee component', () => {
        expect(app.find('SelectedEmployee').exists()).toBe(true);
    });
});

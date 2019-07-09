import React from 'react';
import {shallow} from "enzyme";
import Menu from './Menu';

describe('Menu Component', () => {
    const props = {
        employees: [
            {
                "name": "Vito Corleone",
                "popularity": 5,
                "biography": "Vito Andolini's story starts in Corleone, Sicily. In 1901, the local mafia chieftain, Don Ciccio, murders Vito's father Antonio when he refuses to pay him tribute. Paolo, Vito's older brother, swears revenge, but Ciccio's men kill him too. Ciccio then sends his men to fetch nine-year old Vito. However, Vito's mother insists on going as well and begs Ciccio to spare Vito. Ciccio refuses, reasoning the boy will seek revenge as a grown man. Upon Ciccio's refusal, Vito's mother holds a knife to Ciccio's throat, allowing her son to escape while Ciccio's men kill her. Family friends smuggle Vito out of Sicily, putting him on a ship with immigrants traveling to America. Ellis Island immigration officials rename him Vito Corleone, using his village for his surname. He later uses Andolini as his middle name in acknowledgement of his family heritage.",
                "image": "Vito Corleone.jpg",
                "colleagues": ["Carlo Rizzi", "Luci Mancini"]
            }]
    };
    const component = shallow(<Menu {...props} />);

    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('renders names as links', () => {
        expect(component.find('.header__menu-link').length).toEqual(1);
    });
});
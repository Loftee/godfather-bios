import React, {Component} from 'react';
import Logo from '../assets/the-godfather.svg';

import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className={'header'}>
                <div className={'header__logo'}>
                    <img src={Logo} alt="The Godfather"/>
                </div>
            </div>
        )
    }
}

export default Menu;
import React, {Component} from 'react';
import Logo from '../assets/the-godfather.svg';

import './Menu.css';

class Menu extends Component {
    render() {
        const {employees} = this.props;
        return (
            <div className={'header'}>
                <div className={'header__logo'}>
                    <img src={Logo} alt="The Godfather"/>
                </div>
                <ul className={'header__menu'}>
                    {
                        employees.map((employee, index) => {
                                return (
                                    <li key={index}>
                                        <a className={'header__menu-link'} href={'#'+ employee.name}>{employee.name}</a>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Menu;
import React, {Component} from 'react';
import Logo from '../assets/images/the-godfather.svg';

import './Menu.css';

class Menu extends Component {
    render() {
        const {employees, selectEmployee} = this.props;
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
                                        <a
                                            style={{
                                                fontSize: (employee.popularity * 0.5) * 14
                                            }}
                                            className={employee.selected ? 'header__menu-link header__menu-link--active' : 'header__menu-link'}
                                            href={'#'+ employee.name}
                                            onClick={event => selectEmployee(event, employee.name)}
                                        >{employee.name}</a>
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
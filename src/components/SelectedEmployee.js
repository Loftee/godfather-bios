import React, {Component} from 'react';
import Slider from 'react-input-slider';

import './SelectedEmployee.css';

class SelectedEmployee extends Component {
    render() {
        const {selectedEmployee, slideChange} = this.props;
        return (
            <div className={'selected-employee'}>
                <div className={'selected-employee__left'}>
                    <div className={'selected-employee__image'}>
                        <img src={selectedEmployee.image} alt={selectedEmployee.name}/>
                    </div>
                </div>
                <div className={'selected-employee__right'}>
                    <div className={'selected-employee__info'}>
                        <h2 className={'selected-employee__title'}>
                            {selectedEmployee.name}
                        </h2>
                        <div className={'selected-employee__popularity'}>
                            <h3>Popularity</h3>
                            <div className={'selected-employee__slider'}>
                                <Slider
                                    axis="x"
                                    x={selectedEmployee.popularity}
                                    xmin={1}
                                    xmax={10}
                                    onChange={({ x }) => slideChange(x)}
                                    styles={{
                                        track: {
                                            backgroundColor: '#1b1e24',
                                            height: 3,
                                            width: '100%'
                                        },
                                        active: {
                                            backgroundColor: '#1b1e24'
                                        },
                                        thumb: {
                                            width: 25,
                                            height: 25
                                        }
                                    }}

                                />
                            </div>
                        </div>
                        <div className={'selected-employee__biography'}>
                            <h3>Biography</h3>
                            <p>{selectedEmployee.biography}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectedEmployee;
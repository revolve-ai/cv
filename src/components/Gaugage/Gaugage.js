import React from 'react';
import './Gaugage.css';

export default class Gaugage extends React.Component {
    render() {
        return (
            <div className="Gaugage">
                <div className="Gaugage__Fill" style={{width: this.props.value / this.props.maxValue * 100 + "%"}}></div>
            </div>
        );
    }
}
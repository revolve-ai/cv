import './Grid.css';
import React from "react";
import Gaugage from "../Gaugage/Gaugage";

class GridItem extends React.Component {
    render() {
        return (
            <div className="Grid__Item">
                <div className="Grid__ItemMain">
                    <img src={this.props.image} alt={this.props.name} />
                    <div>
                        <h3>{ this.props.name }</h3>
                        <Gaugage value={ this.props.value } maxValue={100} />
                    </div>
                </div>
                { this.props.perks.length > 0 || typeof(this.props.description) !== "undefined" ? <hr /> : false }
                <div className="Grid__ItemPerks">
                    {this.props.perks.map((perk, index) => (
                        <span key={index}>{perk}</span>
                    ))}
                </div>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

class Grid extends React.Component {
    render() {
        return (
            <div className="Grid">
                {this.props.children}
            </div>
        );
    }
}

Grid.Item = GridItem;
export default Grid;
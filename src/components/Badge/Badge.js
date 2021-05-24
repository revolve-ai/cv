import "./Badge.css"
import React from "react";

export default class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                { this.props.children }
            </div>
        );
    }
}
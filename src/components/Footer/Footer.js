import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Footer__Content">
                    <p>Sandro Schaurer - { new Date().getFullYear() }</p>
                    <p>View source on <a href="https://github.com/r-evolve/cv" target="_blank" rel="noreferrer">Github</a></p>
                </div>
            </footer>
        );
    }
}
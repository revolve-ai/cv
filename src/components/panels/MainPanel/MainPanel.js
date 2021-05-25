import './MainPanel.css';
import React from 'react';
import Gaugage from '../../Gaugage/Gaugage';
import Badge from '../../Badge/Badge';

export default class MainPanel extends React.Component {
    render() {
        return (
            <div className="AppPanel MainPanel">
                <img className="ProfileImage" alt="" src="./data/images/Sandro.jpg" />
                <div className="MainPanel__Profile">
                    <span className="ProfileName">Sandro Schaurer, 24</span>
                    <ul>
                        <li><i className="bi bi-briefcase"></i> Fachinformatiker Anwendungsentwicklung</li>
                        <li><i className="bi bi-house"></i> 76829, Landau in der Pfalz</li>
                        <li><i className="bi bi-envelope"></i> sandro.schaurer@gmail.com</li>
                        <li><i className="bi bi-phone"></i> 06341/2666438</li>
                    </ul>
                    <hr />
                </div>
                <div className="MainPanel__Languages">
                    <h2><i className="bi bi-globe"></i> Languages</h2>
                    <ul>
                        <li>
                            <span>German</span>
                            <Gaugage value={100} maxValue={100} />
                        </li>
                        <li>
                            <span>English</span>
                            <Gaugage value={72} maxValue={100} />
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="MainPanel__SoftSkills">
                    <h2><i className="bi bi-asterisk"></i> Soft Skills</h2>
                    <ul>
                        <li><Badge>Teamfähig</Badge></li>
                        <li><Badge>Verantwortungsbewusst</Badge></li>
                        <li><Badge>Lernbereit</Badge></li>
                        <li><Badge>Zuverlässig</Badge></li>
                    </ul>
                    <hr />
                </div>
                <div className="MainPanel__Social">
                    <h2><i className="bi bi-box"></i> Social</h2>
                    <ul>
                        <li><a href="https://github.com/Aruinerk/" target="_blank" rel="noreferrer"><i className="bi bi-github"></i> Github</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
import './MainPanel.css';
import React from 'react';
import Gaugage from '../../Gaugage/Gaugage';

export default class MainPanel extends React.Component {
    render() {
        return (
            <div className="AppPanel MainPanel">
                <img className="ProfileImage" alt="" src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/44173739_1941053362620152_4308006421573664768_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=tobDT3WkHMQAX_sMDqP&_nc_ht=scontent-frt3-1.xx&oh=bf23ef3a320067293f1a350e39f724c9&oe=60A674E6" />
                <div className="MainPanel__Profile">
                    <span className="ProfileName">Sandro Schaurer, 24</span>
                    <ul>
                        <li><i className="bi bi-briefcase"></i> Fachinformatiker für Anwendungsentwicklung</li>
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
                    <h2> Soft Skills</h2>
                    <ul>
                        <li></li>
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
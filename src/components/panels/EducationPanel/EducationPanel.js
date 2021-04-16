import React from 'react';
import './EducationPanel.css';

export default class EducationPanel extends React.Component {

    state = {
        tabIndex: 0,
        workItems: [],
        educationItems: []
    };

    selectTab(tabIndex) {
        this.setState({ tabIndex });
    }

    loadTabContent() {
        return this.state.tabIndex === 0 ? this.tabWork() : this.tabEducation();
    }

    tabWork() {
        return (
            <div className="EducationPanel__TabWork">
                {  }
                <div className="EducationPanel__TabWork__Item">
                    <h3><b>Front End Developer / domain.com</b></h3>
                    <div className="EducationPanel__TabWork__Item_Date"><i className="bi bi-calendar"></i> From - Now</div>
                    <p>
                        Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel 
                        in deserunt aspernatur est reprehenderit sunt hic. 
                        Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                    </p>
                    <hr />
                </div>
                <div className="EducationPanel__TabWork__Item">
                    <h3><b>Front End Developer / domain.com</b></h3>
                    <div className="EducationPanel__TabWork__Item_Date"><i className="bi bi-calendar"></i> From - Now</div>
                    <p>
                        Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel 
                        in deserunt aspernatur est reprehenderit sunt hic. 
                        Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                    </p>
                    <hr />
                </div>
                <div className="EducationPanel__TabWork__Item">
                    <h3><b>Front End Developer / domain.com</b></h3>
                    <div className="EducationPanel__TabWork__Item_Date"><i className="bi bi-calendar"></i> From - Now</div>
                    <p>
                        Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel 
                        in deserunt aspernatur est reprehenderit sunt hic. 
                        Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                    </p>
                    <hr />
                </div>
            </div>
        );
    }

    tabEducation() {
        return (
            <div>Content 2</div>
        );
    }

    render() {
        return (
            <div className="AppPanel EducationPanel">
                <ol className="EducationPanel__Nav">
                    <li onClick={this.selectTab.bind(this, 0)} className={ this.state.tabIndex === 0 ? "EducationPanel__Nav__Active" : "" }>
                        <h2><i className="bi bi-briefcase"></i> Work Experience</h2>
                    </li>
                    <li onClick={this.selectTab.bind(this, 1)} className={ this.state.tabIndex === 1 ? "EducationPanel__Nav__Active" : "" }>
                        <h2><i className="bi bi-briefcase"></i> Education</h2>
                    </li>
                </ol>
                <hr />
                <div className="EducationPanel__Content">
                    {this.loadTabContent()}
                </div>
            </div>
        );
    }
}
import React from 'react';
import Tabs from '../../Tabs/Tabs';
import './EducationPanel.css';

export default class EducationPanel extends React.Component {

    state = {
        workItems: [
            {
                title: 'Praktikum | Thunder-IT GmbH',
                from: new Date(2013, 0, 28).toLocaleDateString(),
                to: new Date(2013, 1, 8).toLocaleDateString(),
                description: (
                    <div>
                        <i className="bi bi-award"></i>
                        <a href="/data/thunder-it.pdf" target="_blank">Praktikumszeugnis</a>
                    </div>
                )
            },
            {
                title: 'Jahrespraktikum | Mediamarkt Landau',
                from: new Date(2014, 7).toLocaleDateString(),
                to: new Date(2015, 5).toLocaleDateString()
            },
            {
                title: 'Jahrespraktikum | FoxySoft GmbH',
                from: new Date(2015, 7).toLocaleDateString(),
                to: new Date(2016, 10).toLocaleDateString()
            },
            {
                title: 'Weiterbildung ERP-Spezialist | SoftENGINE GmbH',
                from: new Date(2017, 7).toLocaleDateString(),
                to: new Date(2018, 3).toLocaleDateString(),
                description: (
                    <div>
                        <i className="bi bi-award"></i>
                        <a href="/data/erp-spezialist.pdf" target="_blank">Urkunde</a>
                    </div>
                )
            },
            {
                title: 'Ausbildung Fachinformatiker Anwendungsentwicklung | SoftENGINE GmbH',
                from: new Date(2018, 4).toLocaleDateString(),
                to: 'Now',
                description: (
                    <div>
                        <i className="bi bi-award"></i>
                        <a href="https://xrechnung.new" target="_blank" rel="noreferrer">Abschlussprojekt</a>
                    </div>
                )
            }
        ],
        educationItems: [
            {
                title: 'Grundschule | Pestalozzi Grundschule',
                from: 2003,
                to: 2007
            }, 
            {
                title: 'Realschule | Konrad-Adenauer-Realschule+',
                from: 2007,
                to: 2014
            },
            {
                title: 'Fachabitur Technik/Informatik | Konrad-Adenauer-Realschule+',
                from: 2014,
                to: 2017
            },
            {
                title: 'Ausbildung Fachinformatiker Anwendungsentwicklung | BBS Südliche Weinstraße',
                from: 2018,
                to: 'Now'
            }
        ]
    };

    /**
     * 
     * @param {array} collection 
     * @param {any} item 
     * @returns {boolean} is item the last item of array?
     */
     isNotLastItem(collection, item) {
        return collection.indexOf(item) !== collection.length - 1;
    }

    render() {
        return (
            <div className="AppPanel EducationPanel">
                <Tabs>
                    <Tabs.Tab name="Work Experience" icon="bi-briefcase">
                        { this.state.workItems.map((item, index) => (
                            <div key={index}>
                                <h3><b>{ item.title }</b></h3>
                                <div className="EducationPanel__TabWork__Item_Date"><i className="bi bi-calendar"></i> { item.from } - { item.to }</div>
                                { item.description }
                                { this.isNotLastItem(this.state.workItems, item) ? <hr /> : null }
                            </div>
                        ))}
                    </Tabs.Tab>
                    <Tabs.Tab name="Education" icon="bi-book">
                        { this.state.educationItems.map((item, index) => (
                            <div key={index}>
                                <h3><b>{ item.title }</b></h3>
                                <div className="EducationPanel__TabWork__Item_Date"><i className="bi bi-calendar"></i> { item.from } - { item.to }</div>
                                { item.description }
                                { this.isNotLastItem(this.state.educationItems, item) ? <hr /> : null }
                            </div>
                        ))}
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }
}
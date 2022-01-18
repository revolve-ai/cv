import React from 'react';
import Tabs from '../../Tabs/Tabs';
import Grid from '../../Grid/Grid';
import './SkillPanel.css';

export default class WorkPanel extends React.Component {

    state = {
        langauges: [
            {
                name: "JavaScript",
                image: "./data/images/JavaScriptLogo.png",
            value: 90,
                perks: [
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React <i className="bi bi-check"></i></a>,
                    <a href="https://www.highcharts.com/" target="_blank" rel="noreferrer">Highcharts <i className="bi bi-check"></i></a>,
                    <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js <i className="bi bi-check"></i></a>,
                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js <i className="bi bi-check"></i></a>
                ]
            },
            {
                name: "CSS",
                image: "./data/images/CSS3Logo.png",
                value: 82,
                perks: [
                    <a href="https://lesscss.org/" target="_blank" rel="noreferrer">Less <i className="bi bi-check"></i></a>,
                    <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass/Scss <i className="bi bi-check"></i></a>
                ]
            },
            {
                name: "C#",
                image: "./data/images/CSharpLogo.png",
                value: 75,
                perks: [
                    <a href="https://unity.com/de" target="_blank" rel="noreferrer">Unity <i className="bi bi-check"></i></a>,
                    <a href="https://nhibernate.info/">NHibernate <i className="bi bi-check"></i></a>,
                    <a href="https://docs.microsoft.com/de-de/ef/">Entity Framework <i className="bi bi-check"></i></a>
                ]
            },
            {
                name: "TypeScript",
                image: "./data/images/TypeScriptLogo.png",
                value: 75,
                perks: []
            },
            {
                name: "Html",
                image: "./data/images/HTML5Logo.png",
                value: 95,
                perks: []
            },
            {
                name: "PHP",
                image: "./data/images/PHPLogo.png",
                value: 80,
                perks: []
            },
            {
                name: "Java",
                image: "./data/images/JavaLogo.png",
                value: 45,
                perks: []
            },
            {
                name: "Lua",
                image: "./data/images/LuaLogo.png",
                value: 35,
                perks: []
            },
            {
                name: "Python",
                image: "./data/images/PythonLogo.png",
                value: 30,
                perks: []
            }
        ],
        databases: [
            {
                name: "MySQL",
                image: "./data/images/MySQLLogo.png",
                value: 75,
                perks: []
            },
            {
                name: "MongoDB",
                image: "./data/images/MongoDBLogo.png",
                value: 65,
                perks: []
            }
        ],
        other: [
            {
                name: "Windows",
                image: "./data/images/WindowsLogo.png",
                value: 90,
                perks: []
            },
            {
                name: "Linux",
                image: "./data/images/LinuxLogo.png",
                value: 80,
                perks: []
            }
        ],
        projects: [
            {
                name: <a href="https://github.com/Aruinerk/CVHost" target="_blank" rel="noreferrer">CVHost</a>,
                image: "./data/images/GitHubLogo.png",
                progress: 80,
                perks: [
                    "JavaScript/React"
                ],
                description: [
                    "Dieses Projekt soll ein beispielhaftes Code-Sample sein und zugleich meinen Lebenslauf abbilden."
                ]
            },
            {
                name: <a href="https://xrechnung.new" target="_blank" rel="noreferrer">XRechnung.new</a>,
                image: "./data/images/GitHubLogo.png",
                progress: 100,
                perks: [
                    "TypeScript/Vue.js",
                    "PHP/Lumen"
                ],
                description: [
                    "XRechnung.new ist mein Abschlussprojekt zur IHK-Abschlussprüfung."
                ]
            },
            {
                name: <a href="https://github.com/AruOnline/DBCache" target="_blank" rel="noreferrer">AruOnline/DBCache</a>,
                image: "./data/images/GitHubLogo.png",
                progress: 90,
                perks: [
                    "C#/.NET Standard",
                    "NHibernate"
                ],
                description: [
                    "DBCache ist eine C#-Anwendung, welche als bindeglied zwischen einer MySQL/MariaDB Datenbank und einer C# Laufzeit dient. " +
                    "Das Hauptaugenmerk liegt auf Performance und Clean-Code."
                ]
            }
        ]
    }

    render() {
        return (
            <div className="AppPanel SkillPanel">
                <Tabs>
                    <Tabs.Tab name="Skills" icon="bi-asterisk">
                        <h2><i class="bi bi-code-slash"></i> Programming</h2>
                        <hr />
                        <Grid>
                            {this.state.langauges.map((lang, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={lang.name} 
                                    image={lang.image} 
                                    value={lang.value} 
                                    perks={lang.perks} 
                                />
                            ))}
                        </Grid>
                        <h2><i class="bi bi-server"></i> Databases</h2>
                        <hr />
                        <Grid>
                            {this.state.databases.map((lang, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={lang.name} 
                                    image={lang.image} 
                                    value={lang.value} 
                                    perks={lang.perks} 
                                />
                            ))}
                        </Grid>
                        <h2><i class="bi bi-gem"></i> Other</h2>
                        <hr />
                        <Grid>
                            {this.state.other.map((lang, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={lang.name} 
                                    image={lang.image} 
                                    value={lang.value} 
                                    perks={lang.perks} 
                                />
                            ))}
                        </Grid>
                    </Tabs.Tab>
                    <Tabs.Tab name="Projects" icon="bi-kanban">
                        <Grid>
                            {this.state.projects.map((project, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={project.name} 
                                    image={project.image} 
                                    value={project.progress} 
                                    perks={project.perks} 
                                    description={project.description} 
                                />
                            ))}
                        </Grid>
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }
}

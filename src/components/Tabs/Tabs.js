import './Tabs.css';
import React from "react";


class Tab extends React.Component {
    render() {
        return <div>{ this.props.children }</div>
    }
}

class Tabs extends React.Component {

    state = {
        activeTabIndex: 0
    }

    findTabs() {
        const { children } = this.props;
        const tabs = [];

        React.Children.forEach(children, child => {
            if (child.type === Tab) {
                tabs.push(child);
            }
        });

        return tabs;
    }
    
    renderTabs() {
        const tabs = this.findTabs();

        return tabs.map((tab, index) => (
            <li className={"Tabs__NavItem" + (index === this.state.activeTabIndex ? " Tabs__NavItem__Active" : "")} key={index} onClick={this.clickTab.bind(this, index)}>
                <h2><i className={"bi ".concat(tab.props.icon)}></i> { tab.props.name }</h2>
            </li>
        ));
    }

    renderTabContent(index) {
        const tabs = this.findTabs();

        if (tabs.length < index) return;

        return <div style={{padding: "1rem"}}>{ tabs[index] }</div>;
    }

    clickTab(index) {
        this.setState({activeTabIndex: index});
    }

    render() {
        return (
            <div>
                <ol className="Tabs__Nav">
                    { this.renderTabs() }
                </ol>
                <hr />
                { this.renderTabContent(this.state.activeTabIndex) }
            </div>
        );
    }
}

Tabs.Tab = Tab;
export default Tabs;
import 'normalize.css';
import './App.css';
import React from 'react';
import MainPanel from './components/panels/MainPanel/MainPanel';
import EducationPanel from './components/panels/EducationPanel/EducationPanel';
import WorkPanel from './components/panels/WorkPanel/WorkPanel';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="AppGrid">
          <MainPanel />
          <EducationPanel />
          <WorkPanel />
          <Footer />
        </div>
      </div>
    );
  }
}

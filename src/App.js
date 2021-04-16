import './App.css';
import MainPanel from './components/panels/MainPanel/MainPanel';
import EducationPanel from './components/panels/EducationPanel/EducationPanel';
import WorkPanel from './components/panels/WorkPanel/WorkPanel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="AppGrid">
        <MainPanel />
        <EducationPanel />
        <WorkPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;

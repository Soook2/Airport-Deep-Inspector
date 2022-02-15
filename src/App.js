import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Start from './components/Start/Start';
import Information from './components/Information/Information';
import Uav from './components/UAV/Uav';
import SubWindow from './components/UAV/SubWindow';
import SubWindowMission from './components/UAV/SubWindowMission';
import PanoramaHor from './components/Panorama/PanoramaHor';
import PanoramaVer from './components/Panorama/PanoramaVer';
import DefectDetector from './components/Defect Detector/DefectDetector';
import DefectMeasuer from './components/DefectMeasuer/DefectMeasuer';

function App() {
  return (
    <div >
      <Router>
          {/* <Route exact path="/" component={Start} /> */}
          <Route exact path="/" component={Information} />
          <Route exact path="/information/airport/lookup" component={Information} />
          <Route exact path="/information/airport/maintenance" component={Information} />
          <Route exact path="/information/airport/maintenance/lookup" component={Information} />
          
          <Route exact path="/panorama/Hor" component={PanoramaHor} />
          <Route exact path="/panorama/Ver" component={PanoramaVer} />

          <Route exact path="/defectdetector" component={DefectDetector} />

          <Route exact path="/defectmeasuer" component={DefectMeasuer} />
          
          <Route exact path="/uav" component={Uav} />
          <Route exact path="/subwindow" component={SubWindow} />
          <Route exact path="/subwindow/mission" component={SubWindowMission} />
      </Router>
    </div>
  );
}

export default App;

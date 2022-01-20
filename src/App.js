import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Start from './components/Start/Start';
import Information from './components/Information/Information';
import Uav from './components/UAV/Uav';
import SubWindow from './components/UAV/SubWindow';

function App() {
  return (
    <div >
      <Router>
          <Route exact path="/" component={Start} />
          <Route exact path="/information/airport" component={Information} />
          <Route exact path="/information/airport/lookup" component={Information} />
          
          <Route exact path="/uav" component={Uav} />
          <Route exact path="/subwindow" component={SubWindow} />
      </Router>
    </div>
  );
}

export default App;

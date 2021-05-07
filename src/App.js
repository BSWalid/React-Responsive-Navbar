
import './App.css';
import Navbar from './comopnents/Navbar/Navbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import SignUp from './Pages/SingUp';

function App() {
    return ( <div className = "App" >
            <Router>
          <Navbar/>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
        </div>
    );
}

export default App;
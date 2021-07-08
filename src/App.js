
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { RandomImage } from './Components/RandomImage';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Download } from './Components/Download';
import { About } from './Components/About';


function App() {
  return (
    <>

      <Router>

        <div>
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/randomimage" component={RandomImage} />
            <Route path="/download" component={Download} />
            <Route path="/about" component={About} />





          </Switch>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
